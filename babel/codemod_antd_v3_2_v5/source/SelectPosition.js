import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckOutlined, CloseCircleOutlined, SkinOutlined } from '@ant-design/icons';
import { Input, List, Col } from 'antd';
import { isEqual } from 'lodash';
import { callApi } from 'utils';
const Item = List.Item;
const Search = Input.Search;
class SelectPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectObj: this.getDisabledObj(props.selects),
      disabledObj: this.getDisabledObj(props.disabledSelects),
    };
  }
  componentDidMount() {
    this.initList(this.props);
  }
  componentWillReceiveProps(nextProps) {
    const { organizations } = this.props;
    const { selects } = nextProps;
    if (organizations !== nextProps.organizations && nextProps.organizations) {
      this.initList(nextProps);
    }
    if (!isEqual(this.props.selects, selects)) {
      this.setState({
        selectObj: this.getSelectObj(selects),
      });
    }
  }
  //封装已选择列表
  getSelectObj = (selects = []) => {
    let obj = {};
    selects
      .filter(val => val.flowUserSelectionType === 'position' && val.sourceTypeB !== 'source_business_department')
      .forEach(val => {
        obj[Number(val.sourceIdA)] ? '' : (obj[Number(val.sourceIdA)] = true);
      });
    return obj;
  };
  //封装不可选择列表
  getDisabledObj = (disabledList = []) => {
    let obj = {};
    disabledList
      .filter(val => val.flowUserSelectionType === 'position' && val.sourceTypeB !== 'source_business_department')
      .forEach(val => {
        obj[Number(val.sourceIdA)] ? '' : (obj[Number(val.sourceIdA)] = true);
      });
    return obj;
  };
  /**
   * 获取岗位
   */
  initList = props => {
    this.setState({
      loading: true,
    });
    const { organizations } = props;
    let api = '/newOrg/listOrganizationJobPosition';
    let data = {
      pageSize: 10000,
      ownerType: 'EhOrganizations',
      ownerId: organizations.id,
      appId: window.$$context.appId,
    };
    callApi({
      api,
      data,
      success: ({ organizationJobPositionDTOS = [] }) => {
        this.setState({
          dataSource: organizationJobPositionDTOS,
          loading: false,
          organizationJobPositionDTOS,
        });
      },
    });
  };

  /**
   * 根据关键字搜索
   */
  searchByKeywords = value => {
    const val = value.trim();
    this.setState(
      {
        anchors: [],
        lastPageAnchor: 0,
        keywords: val,
      },
      this.initList.bind(null, {
        keywords: val,
      }),
    );
    // this.initList({
    // 	keywords: val
    // });
  };

  // 点击列表数据 添加一条数据
  onitemClick = item => {
    const { organizations } = this.props;
    let { selectObj } = this.state;
    if (selectObj[item.id]) {
      this.props.removeItems([
        {
          selectionName: item.name,
          flowUserSelectionType: 'position',
          sourceIdA: item.id,
          sourceTypeA: 'source_position',
          sourceIdB: organizations.id,
          sourceTypeB: organizations.type || 'source_department',
        },
      ]);
    } else {
      this.props.addItems([
        {
          selectionName: item.name,
          flowUserSelectionType: 'position',
          sourceIdA: item.id,
          sourceTypeA: 'source_position',
          sourceIdB: organizations.id,
          sourceTypeB: organizations.type || 'source_department',
        },
      ]);
    }
  };
  /**
   * 根据关键字搜索
   */
  searchByKeywords = (keywords = '') => {
    keywords = keywords.trim();
    let { dataSource = [], organizationJobPositionDTOS = [] } = this.state;
    if (!keywords) {
      return this.setState({
        dataSource: organizationJobPositionDTOS,
      });
    }
    this.setState({
      dataSource: dataSource.filter(obj => obj.name.indexOf(keywords) > -1),
    });
  };
  render() {
    const { loading, searchText, dataSource, disabledObj, selectObj } = this.state;
    return (
      <Col className='tree-box'>
        <Search
          placeholder='请输入岗位'
          value={searchText}
          onChange={e => {
            this.setState({
              searchText: e.target.value,
            });
            if (!e.target.value) this.searchByKeywords();
          }}
          onSearch={this.searchByKeywords}
          className='select-box-search'
        />
        <CloseCircleOutlined
          className={searchText ? 'search-close-circle' : 'display-none'}
          onClick={() =>
            this.setState(
              {
                searchText: '',
              },
              this.searchByKeywords(),
            )
          }
        />
        <div className={'select-scroll-view'}>
          <List
            dataSource={dataSource}
            size={'small'}
            split={false}
            locale={{
              emptyText: '未找到相关结果',
            }}
            loading={loading}
            renderItem={item => {
              let className = 'tree-list-item';
              if (disabledObj[item.id] && selectObj[item.id]) {
                className += ' ant-tree-node-selected disabled-click';
              } else if (disabledObj[item.id]) {
                className += ' disabled-click';
              } else if (selectObj[item.id]) {
                className += ' ant-tree-node-selected';
              }
              return (
                <Item
                  className={className}
                  onClick={() => {
                    !disabledObj[item.id] && this.onitemClick(item);
                  }}
                >
                  <SkinOutlined className='list-type-icon' />
                  {item.name}
                  <CheckOutlined className={'select-modal-checked-icon'} />
                </Item>
              );
            }}
          />
        </div>
      </Col>
    );
  }
}
SelectPosition.propTypes = {
  // 组织架构数据
  organizations: PropTypes.object.isRequired,
  organizationId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /* 以下是configs额外传进来的参数 */
  // 扩展的树节点，格式为 [{id: -1, name: '不限部门', type: 'source_unlimited_department', childrens: [...]}]
  extendTree: PropTypes.array,
  disabledSelects: PropTypes.array,
  selects: PropTypes.array,
  addItems: PropTypes.func.isRequired,
  removeItems: PropTypes.func.isRequired,
};
export default SelectPosition;
