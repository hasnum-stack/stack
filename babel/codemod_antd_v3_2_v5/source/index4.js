import { DownCircleOutlined, UpOutlined, DownOutlined, UpCircleOutlined } from '@ant-design/icons';
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select, InputNumber, DatePicker, Input, Spin } from 'antd';
import { callApi, getUrlQuery, getQueryParams, getBasicInfo, cache, buryBehavior } from 'utils';
import './index.less';
import moment from 'moment';
import { cloneDeep } from 'lodash';
const { RangePicker } = DatePicker;
const { Option } = Select;
const prefixCls = 'search-list';
class Search extends (PureComponent || Component) {
  constructor(props) {
    super(props);
    this.state = {
      searchList: [],
      // communityId: getQueryParams().communityId || getBasicInfo('communityId'),
      communityId: -1,
      namespaceId: getQueryParams().namespaceId || getBasicInfo('namespaceId'),
      organizationId: getBasicInfo('organizationId'),
      limitNum: 3,
      expend: true,
      searchParms: {},
    };
  }
  componentDidMount() {
    this.listStrategyFields(this.props.typeId || 0, this.compareDiff);
    !this.props.typeId && this.listStrategys(this.props.communityId);
    this.listCellShopFormsByDatas(this.props.communityId);
    this.listPublishBuilding(this.props.communityId, this.props.typeId);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.typeId !== this.props.typeId) {
      this.setStateParms(nextProps);
      cache.delPageState('listing-release', 'searchParms');
      cache.delPageState('listing-release', 'searchInputParms');
      // this.listStrategyFields(nextProps.typeId || 0, this.compareDiff);
      this.listPublishBuilding(nextProps.communityId, nextProps.typeId);
    }
    if (nextProps.communityId !== this.props.communityId) {
      this.setState(
        {
          communityId: nextProps.communityId,
        },
        () => {
          !this.props.typeId && this.listStrategys(nextProps.communityId);
          this.listCellShopFormsByDatas(nextProps.communityId);
          this.listPublishBuilding(nextProps.communityId, nextProps.typeId);
        },
      );
    }
  }
  compareDiff = (list = []) => {
    const searchParms = cache.getPageState('listing-release', 'searchParms');
    if (this.props.location.pathname === '/listing-release' && searchParms) {
      const oldInputParms = cache.getPageState('listing-release', 'searchInputParms');
      const parmsKey = [];
      for (const i in searchParms) {
        parmsKey.push(i);
      }
      this.setState({
        searchParms,
      });
      const newList = list.map(v => {
        if (v.items) {
          let noInput = false;
          for (const i in oldInputParms) {
            if (i === v.fieldName) {
              noInput = true;
            }
          }
          v.items.map(item => {
            if (noInput) {
              item.chooseAble = false;
            } else {
              if (item.fieldNameDown && item.fieldNameUp) {
                if (parmsKey.findIndex(m => m === item.fieldNameDown) > -1) {
                  item.chooseAble = false;
                  if (
                    item.valueDown === searchParms[item.fieldNameDown] &&
                    item.valueUp === searchParms[item.fieldNameUp]
                  ) {
                    item.chooseAble = true;
                  }
                }
              }
              if (item.fieldName) {
                if (parmsKey.findIndex(m => m === item.fieldName) > -1) {
                  item.chooseAble = false;
                  const value = searchParms[item.fieldName] ? searchParms[item.fieldName] : '';
                  const itemValue = item.value ? item.value : '';
                  if (itemValue == value) {
                    item.chooseAble = true;
                  }
                }
              }
            }
          });
          // return v.items;
        }
        return v;
      });
      const { communityId, name, typeId, ...leftArgements } = searchParms;
      // this.props.onSearch && this.props.onSearch(leftArgements);

      this.setState({
        ...oldInputParms,
        searchFields: newList,
        ...leftArgements,
        argements: {
          ...leftArgements,
        },
      });
    }
  };

  /**
   * listStrategys：获取招商类型
   * @param {*} communityId ；
   */
  listStrategys = cId => {
    const { namespaceId } = this.state;
    const communityId = cId || getUrlQuery(this.props.location.search).communityId;
    const organizationId = getBasicInfo('organizationId');
    callApi({
      api: '/investmentStrategy/listStrategys',
      data: {
        namespaceId,
        communityId,
        organizationId,
      },
      success: (res = []) => {
        res.map(v => {
          v.name = v.typeName;
          v.fieldName = 'typeId';
          v.value = v.id;
        });
        res.unshift({
          name: '不限',
          fieldName: 'typeId',
          value: '',
          chooseAble: true,
        });
        this.setState({
          strategysList: res,
          strategysChooseId: res[0].id,
        });
      },
    });
  };

  /**
   * listCellShopFormsByDatas：获取已关联的商业业态
   * @param {*} communityId 园区id
   */
  listCellShopFormsByDatas = cId => {
    const { namespaceId } = this.state;
    const communityId = cId || getUrlQuery(this.props.location.search).communityId;
    const organizationId = getBasicInfo('organizationId');
    callApi({
      api: '/investmentStrategy/listCellShopFormsByDatas',
      data: {
        namespaceId,
        communityId,
        organizationId,
        moduleId: 150010,
        formatTag: 2,
      },
      success: (res = []) => {
        const searchParms = cache.getPageState('listing-release', 'searchParms');
        let choose = true;
        res.map(v => {
          v.value = v.itemId;
          v.fieldName = 'businessType';
          if (searchParms && searchParms.businessType) {
            if (v.itemId === searchParms.businessType) {
              v.chooseAble = true;
              choose = false;
            }
          }
        });
        res.unshift({
          name: '不限',
          value: '',
          fieldName: 'businessType',
          chooseAble: choose,
        });
        this.setState({
          businessTypeList: res,
        });
      },
    });
  };

  /**
   * listPublishBuilding
   * 获取楼栋名称
   */
  listPublishBuilding = (cId, id) => {
    const { namespaceId } = this.state;
    const communityId = cId || getUrlQuery(this.props.location.search).communityId;
    callApi({
      api: '/investmentAd/listPublishBuilding',
      data: {
        namespaceId,
        communityId,
        pageOffset: 1,
        typeId: id,
        pageSize: 999,
      },
      success: (res = []) => {
        const searchParms = cache.getPageState('listing-release', 'searchParms');
        let choose = true;
        res.map(v => {
          v.name = v.buildingName;
          v.value = v.buildingId;
          v.fieldName = 'buildingId';
          if (searchParms && searchParms.buildingId) {
            if (v.buildingId === searchParms.buildingId) {
              v.chooseAble = true;
              choose = false;
            }
          }
        });
        res.unshift({
          name: '不限',
          value: '',
          fieldName: 'buildingId',
          chooseAble: choose,
        });
        this.setState({
          buildingNameList: res,
        });
      },
    });
  };
  setStateParms = nextProps => {
    this.setState(
      {
        loading: true,
        expend: true,
        limitNum: 3,
        searchParms: {},
        etStartTime: '',
        etEndTime: '',
        earlyStartTime: '',
        earlyEndTime: '',
        areaSize: '',
        floor: '',
        minPrice: '',
        price: '',
        budget: '',
        argements: {},
      },
      () => {
        this.listStrategyFields(nextProps.typeId || 0, this.compareDiff);
      },
    );
  };
  listStrategyFields = (id, cb) => {
    const listArry = [
      'decorationType',
      'buildingName',
      'name',
      'earliestTenantable',
      'partitionFlag',
      'businessType',
      'investmentType',
      'endTime',
      'investmentStatus',
      'orientation',
    ];
    const { namespaceId, organizationId, communityId } = this.state;
    // if (!id) return;
    this.setState({
      loading: true,
      expend: true,
      limitNum: 3,
    });
    callApi({
      api: '/investmentStrategy/listStrategyFieldsWithoutAuth',
      data: {
        namespaceId: String(id) === '0' ? 0 : namespaceId,
        communityId,
        organizationId: String(id) === '0' ? 0 : organizationId,
        moduleName: 'investment',
        typeId: String(id) === '0' ? '' : id,
      },
      success: (res = {}) => {
        const { strategyFilterFieldGroups = [] } = res;
        const searchFields = [];
        strategyFilterFieldGroups.map(v => {
          const { strategyFields } = v;
          strategyFields.map(item => {
            if (item.filterStatus === 1 || item.filterStatus === 2) {
              searchFields.push(item);
            }
          });
        });
        searchFields.map(item => {
          let fieldNameDown, fieldNameUp;
          if (item.items) {
            fieldNameDown = item.items[0].fieldNameDown;
            fieldNameUp = item.items[0].fieldNameUp;
          }
          if (item.fieldName === 'decorationType' || item.fieldName === 'orientation') {
            item.items &&
              item.items.unshift({
                name: '不限',
                value: '',
                chooseAble: true,
                fieldName: item.fieldName,
              });
          } else {
            item.items &&
              item.items.unshift({
                name: '不限',
                valueDown: '',
                valueUp: '',
                chooseAble: true,
                fieldNameDown: fieldNameDown,
                fieldNameUp: fieldNameUp,
              });
          }
          if (listArry.indexOf(item.fieldName) < 0) {
            item.items &&
              item.items.push({
                name: '',
                type: 'input',
                valueDown: '0',
                valueUp: '0',
                chooseAble: false,
              });
          }
          if (item.fieldName === 'partitionFlag') {
            item.items = [
              {
                name: '不限',
                fieldName: 'partitionFlag',
                chooseAble: true,
              },
              {
                name: '是',
                fieldName: 'partitionFlag',
                value: '1',
              },
              {
                name: '否',
                fieldName: 'partitionFlag',
                value: '0',
              },
            ];
          }
          if (item.fieldName === 'endTime' || item.fieldName === 'earliestTenantable') {
            item.fieldType = 'rangData';
          }
        });
        let newFields = searchFields.filter(v => v.fieldName !== 'name');
        // if (this.props.typeId) {
        // 	newFields = newFields.filter(v => v.fieldName !== 'investmentType');
        // }
        newFields = newFields.filter(v => v.fieldName !== 'investmentType'); //去掉招商类型筛选字段

        if (cb) {
          cb(searchFields);
        }
        this.setState({
          loading: false,
          searchFields: newFields,
        });
      },
    });
  };

  /**
   * 搜索选中事件
   * @param {*} name
   * @param {*} i
   */
  clickItem = (name, i) => {
    const { searchFields = [] } = this.state;
    let startValue, endValue, startName, endName, searchWorlds, value;
    const newlist = searchFields.map(v => {
      if (v.fieldName === name) {
        v.items &&
          v.items.map((item, index) => {
            item.chooseAble = i === index;
            if (i === index) {
              if (item.fieldNameDown || item.fieldNameUp) {
                startValue = item.valueUp;
                endValue = item.valueDown;
                startName = item.fieldNameUp;
                endName = item.fieldNameDown;
              }
              if (item.fieldName) {
                searchWorlds = item.fieldName;
              }
              if (item.value) {
                value = item.value;
              }
            }
          });
      }
      return v;
    });
    //点击选中的时候处理输入框的内容
    const oldInputParms = cache.getPageState('listing-release', 'searchInputParms');
    const searchInputParms = cloneDeep(oldInputParms);
    if (oldInputParms) {
      for (const i in oldInputParms) {
        if (i === name) {
          delete searchInputParms[name];
          this.setState({
            [name]: '',
          });
        }
      }
    }
    const { argements = {} } = this.state;
    let newArg = {};
    if (searchWorlds) {
      newArg = {
        ...argements,
        [searchWorlds]: value,
      };
    } else if (startName || endValue) {
      newArg = {
        ...argements,
        [startName]: startValue,
        [endName]: endValue,
      };
    } else {
      newArg = {
        ...argements,
      };
    }
    this.setState(
      {
        searchFields: newlist,
        argements: newArg,
      },
      () => {
        if (location.pathname !== '/listing-release/list_detail') {
          cache.setPageState('listing-release', 'searchInputParms', searchInputParms);
        }
        this.props.onSearch && this.props.onSearch(newArg);
      },
    );
  };
  chooseCommunityId = communityId => {
    this.props.onSetCommunityId && this.props.onSetCommunityId(communityId);
  };
  communityListRender = () => {
    const { state } = this;
    const { communityId } = state;
    const { noStrategyType } = this.props;
    let communities = getBasicInfo('communities') || [];
    communities.unshift({
      id: -1,
      name: '全部',
    });
    communities = cloneDeep(communities);
    return (
      <div
        className={`${prefixCls}-main-content-item`}
        style={{
          paddingBottom: 7,
        }}
      >
        <div className={`${prefixCls}-main-content-item-name`}>项目</div>
        <div
          className={`${prefixCls}-main-content-item-list`}
          style={{
            borderBottom: 'none',
          }}
        >
          {/* <span className={communityId == -1 ? 'search-list-choose' : ''}
           onClick={() => { this.chooseCommunityId(-1) }}
           >全部</span>
           {
           communities.map((v, index) => (<span key={index} className={communityId == v.id ? 'search-list-choose' : ''}
           onClick={() => { this.chooseCommunityId(v.id) }}>
           {v.name}
           </span>))
           } */}

          <Select
            showSearch
            value={communityId}
            style={{
              width: 448,
            }}
            // placeholder="Select a person"
            optionFilterProp='children'
            onChange={value => {
              this.chooseCommunityId(value);
            }}
            // filterOption={(input, option) =>
            // 	option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
          >
            {/*{noStrategyType && <Option value={-1}>不限</Option>}*/}
            {communities?.map((v, index) => (
              <Option value={v.id} key={v.id}>
                {v.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    );
  };
  searchListRender = (searchFields = []) => {
    const { state } = this;
    const { limitNum } = this.state;
    return searchFields.map((item, index) => {
      if (index >= limitNum) return;
      let minName, maxName;
      return (
        <div key={index} className={`${prefixCls}-main-content-item`}>
          <div className={`${prefixCls}-main-content-item-name`}>{item.fieldDisplayName}</div>
          <div className={`${prefixCls}-main-content-item-list`}>
            {item.items &&
              item.items.map((v, i) => {
                if (v.fieldNameUp && v.fieldNameDown) {
                  minName = v.fieldNameUp;
                  maxName = v.fieldNameDown;
                }
                if (v.type && v.type === 'input') {
                  return (
                    <span>
                      <InputNumber
                        style={{
                          width: 74,
                        }}
                        size='small'
                        value={state[item.fieldName] ? state[item.fieldName][minName] : ''}
                        onChange={e => {
                          this.inputValue(e, minName, item.fieldName, 'valueUp');
                        }}
                      />
                      &nbsp;-&nbsp;
                      <InputNumber
                        style={{
                          width: 74,
                        }}
                        size='small'
                        value={state[item.fieldName] ? state[item.fieldName][maxName] : ''}
                        onChange={e => {
                          this.inputValue(e, maxName, item.fieldName, 'valueDown');
                        }}
                      />
                      &nbsp;
                      <a
                        style={{
                          color: '#07A6F0',
                          marginLeft: 10,
                        }}
                        onClick={() => {
                          this.addArgClick(item.fieldName);
                        }}
                      >
                        确定
                      </a>
                    </span>
                  );
                }
                return (
                  <span
                    key={i}
                    className={v.chooseAble ? 'search-list-choose' : ''}
                    onClick={() => {
                      this.clickItem(item.fieldName, i);
                    }}
                  >
                    {v.name}
                  </span>
                );
              })}
            {this.renderOtherSearch(item)}
          </div>
        </div>
      );
    });
  };
  timePickerValue = name => {
    const { state } = this;
    let startDate, endTime;
    if (name === 'earliestTenantable') {
      startDate = 'earlyStartTime';
      endTime = 'earlyEndTime';
    } else if (name === 'endTime') {
      startDate = 'etStartTime';
      endTime = 'etEndTime';
    }
    if (state[startDate]) {
      return [moment(state[startDate]), moment(state[endTime])] || [];
    }
    return [];
  };
  renderOtherSearch = item => {
    const { state } = this;
    let startDate, endTime;
    const name = item.fieldName;
    if (name === 'earliestTenantable') {
      startDate = 'earlyStartTime';
      endTime = 'earlyEndTime';
    } else if (name === 'endTime') {
      startDate = 'etStartTime';
      endTime = 'etEndTime';
    }
    if (item.fieldType && item.fieldType === 'Date') {
      return (
        <DatePicker
          style={{
            width: '300px',
          }}
          onChange={data => {
            this.timePicker(data, item.fieldName);
          }}
        />
      );
    }
    if (item.fieldType && item.fieldType === 'Search') {
      return (
        <Input.Search
          placeholder='请输入'
          style={{
            width: 300,
          }}
          onSearch={value => {
            this.onSearch(value, item.fieldName);
          }}
        />
      );
    }
    if (item.fieldType && item.fieldType === 'rangData') {
      return (
        <RangePicker
          placeholder='请输入'
          style={{
            width: 300,
          }}
          value={state[startDate] ? [moment(state[startDate]), moment(state[endTime])] : []}
          onChange={(date, dateString) => {
            this.rangePickerPick(date, dateString, item.fieldName);
          }}
        />
      );
    }
  };
  rangePickerPick = (date, dateString, name) => {
    const { argements = {} } = this.state;
    let startDate, endTime;
    if (name === 'earliestTenantable') {
      startDate = 'earlyStartTime';
      endTime = 'earlyEndTime';
    } else if (name === 'endTime') {
      startDate = 'etStartTime';
      endTime = 'etEndTime';
    }
    this.setState(
      {
        argements: {
          ...argements,
          [startDate]: date.length > 0 ? moment(date[0]).startOf('day').valueOf() : '',
          [endTime]: date.length > 0 ? moment(date[1]).endOf('day').valueOf() : '',
        },
        [startDate]: date.length > 0 ? moment(date[0]).startOf('day').valueOf() : '',
        [endTime]: date.length > 0 ? moment(date[1]).endOf('day').valueOf() : '',
      },
      () => {
        const oldParms = cache.getPageState('listing-release', 'searchInputParms');
        const searchInputParms = {
          ...oldParms,
          [name]: name,
        };
        if (location.pathname !== '/listing-release/list_detail') {
          cache.setPageState('listing-release', 'searchInputParms', searchInputParms);
        }
        this.props.onSearch && this.props.onSearch(this.state.argements);
      },
    );
  };
  timePicker = (data, name) => {
    const { argements = {} } = this.state;
    this.setState(
      {
        argements: {
          ...argements,
          [name]: moment(data).valueOf(),
        },
      },
      () => {
        this.props.onSearch && this.props.onSearch(this.state.argements);
      },
    );
  };
  onSearch = (value, name) => {
    const { argements = {} } = this.state;
    this.setState(
      {
        argements: {
          ...argements,
          [name]: value,
        },
      },
      () => {
        this.props.onSearch && this.props.onSearch(this.state.argements);
      },
    );
  };
  inputValue = (value, name, fieldName, valueName) => {
    const { searchFields = [] } = this.state;
    const newFields = searchFields.map(v => {
      if (v.fieldName === fieldName) {
        v.items &&
          v.items.map(item => {
            if (item.type === 'input') {
              item[valueName] = value;
            }
          });
      }
      return v;
    });
    this.setState({
      // searchFields: newFields,
      [fieldName]: {
        ...this.state[fieldName],
        [name]: value,
      },
    });
  };

  /**
   * 确定点击事件
   * @param {*} name
   */
  addArgClick = name => {
    switch (name) {
      case 'floor':
        buryBehavior({
          title: '楼层搜索',
          moduleId: 150010,
          eventName: '楼层搜索访问',
          eventEnName: 'floorSearchAccess',
          eventNo: 2,
          pageCustomType: '查询房源',
          eventType: 2,
          eventBigType: 2,
          pageId: 'housingInvestment',
          sourcePageFlag: 1,
          // pageAccessType: 1,
        });
        break;
      case 'areaSize':
        buryBehavior({
          title: '面积搜索',
          moduleId: 150010,
          eventName: '面积搜索访问',
          eventEnName: 'areaSearchAccess',
          eventNo: 3,
          eventType: 2,
          pageCustomType: '查询房源',
          eventBigType: 2,
          pageId: 'housingInvestment',
          sourcePageFlag: 1,
          // pageAccessType: 1,
        });
        break;
      case 'price':
        buryBehavior({
          title: '租金搜索',
          moduleId: 150010,
          eventName: '租金搜索访问',
          eventEnName: 'rentSearchAccess',
          pageCustomType: '查询房源',
          eventNo: 4,
          eventType: 2,
          eventBigType: 2,
          pageId: 'housingInvestment',
          sourcePageFlag: 1,
          // pageAccessType: 1,
        });
        break;
      default:
        break;
    }
    const { argements = {}, searchFields = [] } = this.state;
    const newFields = searchFields.map(v => {
      if (v.fieldName === name) {
        v.items &&
          v.items.map(item => {
            item.chooseAble = false;
          });
      }
      return v;
    });
    this.setState(
      {
        searchFields: newFields,
        argements: {
          ...argements,
          ...this.state[name],
        },
      },
      () => {
        const oldParms = cache.getPageState('listing-release', 'searchInputParms');
        const searchInputParms = {
          ...oldParms,
          [name]: this.state[name],
        };
        if (location.pathname !== '/listing-release/list_detail') {
          cache.setPageState('listing-release', 'searchInputParms', searchInputParms);
        }
        this.props.onSearch && this.props.onSearch(this.state.argements);
      },
    );
  };
  changeStatus = num => {
    const { searchFields = [], expend } = this.state;
    if (!expend) {
      buryBehavior({
        title: '筛选控件',
        moduleId: 150010,
        eventName: '筛选控件访问',
        eventEnName: 'filterControlAccess',
        eventNo: 5,
        eventType: 2,
        pageCustomType: '查询房源',
        eventBigType: 2,
        pageId: 'housingInvestment',
        sourcePageFlag: 1,
        // pageAccessType: 1,
      });
    }
    this.setState({
      expend: !expend,
      limitNum: Number(num) === 3 ? searchFields.length : 3,
    });
  };
  render() {
    const {
      searchFields = [],
      loading,
      limitNum,
      expend,
      strategysList = [],
      businessTypeList = [],
      buildingNameList = [],
    } = this.state;
    searchFields.map(v => {
      if (v.fieldName === 'investmentType') {
        v.items = strategysList;
      }
      if (v.fieldName === 'businessType') {
        v.items = businessTypeList;
      }
      if (v.fieldName === 'buildingName') {
        v.items = buildingNameList;
      }
    });
    return (
      <div className={`${prefixCls}`}>
        <DownCircleOutlined classnames={'123'} tesa={a} />
        <Spin spinning={loading}>
          {props.expand ? <UpOutlined /> : <DownOutlined />}

          <div className={`${prefixCls}-main`}>
            <div className={`${prefixCls}-main-content`}>
              {this.props.onSetCommunityId && this.communityListRender()}
              {this.searchListRender(searchFields)}
              {searchFields.length > 3 ? (
                <div className={`${prefixCls}-main-content-moreSelect`} onClick={() => this.changeStatus(limitNum)}>
                  {expend ? '展开选项' : '收起选项'}&nbsp;
                  {expend ? <DownCircleOutlined /> : <UpCircleOutlined />}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </Spin>
      </div>
    );
  }
}
Search.propTypes = {};
export default Search;
