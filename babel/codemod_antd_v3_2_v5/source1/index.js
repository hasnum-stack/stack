import React, { Component, PureComponent } from 'react';
import { Button, Input, Row, Icon, Spin, Col, Tooltip, Drawer, Table, Modal } from 'antd';
import { callApi, getUrlQuery, getBasicInfo } from 'utils';
import { isEqual, cloneDeep } from 'lodash';
import { PaginationTable } from 'components';
import './index.less';
const Search = Input.Search;

class ChooseAddressModal extends (PureComponent || Component) {
	constructor (props) {
		super(props);
		const {namespaceId, organizationId} = this.props || {};
		this.state = {
			communityId: '',
			namespaceId,
			organizationId,
			buildingList: [],
			selectedBuilding: {},
			apartmentsList: [],
			currentSelectedRowKeys: [],
			currentSelected: [],
			pageSelectedValue: 0,
			buildingLoading: false, // 房源loading
			apartmentLoading: false, // 房源展示loading
		};
	}

	componentDidMount () {
		const { selectedUnits, selectedUnitsKey = [], visible, communityId } = this.props;
		this.setState({selectedUnits,
			selectedUnitsKey,
			visible,
			communityId,
			currentSelected: cloneDeep(selectedUnits),
			currentSelectedRowKeys: cloneDeep(selectedUnitsKey),
			selectedRowKeys: cloneDeep(selectedUnitsKey),
			pageSelectedValue: selectedUnitsKey.length,
			selectedBuilding: cloneDeep(selectedUnits)
		}, this.initSelectBuilding);
		if (communityId) {
			this.listBuildings(communityId);
		}
	}
	componentWillReceiveProps (nextProps) {
		if (nextProps.visible) {
			nextProps.communityId && this.listBuildings(nextProps.communityId);
		}
	}
	selectBuilding = (v, index) => {
		this.setState({
			selectedBuilding: v,
			selectedBuildingIndex: index,
		}, this.listInvestmentCells);
	}

	//单元列表
	getColumns = () => {
		const columns = [{
			title: '单元名称',
			dataIndex: 'name',
			key: 'name',
			render: (text, row) => {
				return <span>
					{text}&nbsp;
					{(row.relatedCellNumber ? ('(' + row.relatedCellNumber + ')') : '')}
				</span>;
			}
		}];
		return columns;
	}

	//选中列表
	getSelectedColumns = () => {
		const columns = [{
			title: '楼宇',
			dataIndex: 'buildingName',
			key: 'buildingName',
			width: 120,
			align: 'center',
			render: (text) => {
				return <Tooltip title={text}>
					<div className="ellipsis-text">
						{text}
					</div>
				</Tooltip>;
			}

		}, {
			title: '单元',
			dataIndex: 'name',
			key: 'name',
			width: 200,
			align: 'center',
			render: (text, row) => (
				<Tooltip title={text + (row.relatedCellNumber ? ('(' + row.relatedCellNumber + ')') : '')}>
					<div className="ellipsis-text">
						{text}
						{(row.relatedCellNumber ? ('(' + row.relatedCellNumber + ')') : '')}
					</div>
				</Tooltip>
			),
		}, {
			title: '操作',
			width: 60,
			// align: 'center',
			render: (text, row, index) => {
				return <a onClick={() => this.deleteApartment(row.id)}>删除</a>;
			}
		}];
		return columns;
	}

	//楼宇列表
	getBuildingColumns = () => {
		const columns = [{
			title: '楼宇',
			dataIndex: 'buildingName',
			key: 'buildingName',
			render: (text, row, index) => {
				const {selectedBuilding, currentSelected} = this.state;
				const isLock = !!(currentSelected && currentSelected.length > 0);
				const isSelected = row.id == selectedBuilding.id;

				return (<div className={isSelected ? 'selected' : 'noraml'}
					onClick={() => this.selectBuilding(row, index)}> {text}</div>);
			}
		}];
		return columns;
	}

	deleteApartment = (value) => {
		let {currentSelected, currentSelectedRowKeys} = this.state;
		currentSelected = currentSelected.filter(v => {
			return v.id != value;
		});
		currentSelectedRowKeys = currentSelectedRowKeys.filter(v => {
			return v != value;
		});
		let length = currentSelectedRowKeys.length;
		this.setState({
			currentSelectedRowKeys: cloneDeep(currentSelectedRowKeys),
			currentSelected: cloneDeep(currentSelected),
			pageSelectedValue: length,
			selectedRowKeys: cloneDeep(currentSelectedRowKeys),
			selectBuilding: {}

		});
	}

	clearAll = () => {
		this.setState({
			currentSelectedRowKeys: [],
			selectedRowKeys: [],
			currentSelected: [],
			pageSelectedValue: 0
		});
	}

	//请求楼栋
	listBuildings = (communityId, keywords = '') => {
		this.setState({buildingLoading: true});
		callApi({
			api: '/community/listBuildings',
			data: {
				communityId,
				pageOffset: 1,
				pageSize: 999,
				keywords
			},
			success: (response) => {
				let buildingList = response.buildings.map(v => {
					return {
						value: v.id,
						label: v.buildingName,
						...v
					};
				});
				this.setState({
					buildingList,
					buildingNum: response.totalNum,
				}, () => {
					setTimeout(() => {
						this.initSelectBuilding();
					}, 0);
				});
			},
			complete: () => {
				this.setState({
					buildingLoading: false
				});
			}
		});
	}
	filterUnits = (value) => {
		this.listInvestmentCells(value);
	}
	//请求单元
	listInvestmentCells = (keyword) => {
		const { namespaceId, organizationId, communityId, typeIds } = this.props || {};

		const { selectedBuilding = {} } = this.state;
		if (!selectedBuilding.id) return;
		this.setState({apartmentLoading: true});
		callApi({
			api: '/investmentAd/listRelatedAssetToEntryApply',
			data: {
				communityId,
				namespaceId,
				organizationId,
				buildingId: selectedBuilding.id,
				// buildingName: selectedBuilding.buildingName,
				typeIds: typeIds.split('|'),
				name: keyword,
				pageOffset: 1,
				pageSize: 999,
			},
			success: (response) => {
				this.setState({
					investmentCells: response.asset
				});
			},
			complete: () => {
				this.setState({
					apartmentLoading: false
				});
			}
		});
	}

	initSelectBuilding =() => {
		const {currentSelected, buildingList = []} = this.state;
		let buildingId;
		if (currentSelected && currentSelected.length > 0) {
			buildingId = currentSelected[0].buildingId;
		} else if (buildingList.length > 0) {
			buildingId = buildingList[0].id;
		}
		const selectedBuilding = buildingList.filter(v => v.value === buildingId);
		if (selectedBuilding[0]) {
			this.selectBuilding(selectedBuilding[0]);
		} else {
			this.listInvestmentCells();
		}
	}

	rowSelection = () => {
		return {
			// type: 'radio',
			onChange: (selectedRowKeys, selectedRows) => {
				let value = selectedRowKeys.length;
				this.setState({
					selectedRowKeys,
					pageSelectedValue: value,
					selectedRows
				});
			},
			onSelect: (record, selected, selectedRows) => {
				this.setState({
					// currentSelectedRowKeys: selectedRows.id,
					currentSelected: [...selectedRows]
				});
			},
			selectedRowKeys: this.state.selectedRowKeys,
		};
	}

	onCancel=() => {
		this.props.onCancel();
		// this.setState({visible: false});
	}

	onOk = () => {
		let {currentSelected} = this.state;
		this.setState({
			visible: false
		});
		this.props.onOk && this.props.onOk(currentSelected);
	}

	render () {
		const prefixCls = 'investment-strategy-chooseUnitModal';
		const { visible } = this.props;
		let { buildingList, selectedBuilding, buildingLoading, investmentCells, apartmentLoading, buildingNum = 0,
			currentSelected, pageSelectedValue, communityId } = this.state;
		return (
            (<Drawer
				width={1200}
				rootClassName={prefixCls}
				open={visible}
				title={'选择房源'}
				onClose={this.onCancel}
				onOk={this.onOk}
				onCancel={this.onCancel}
			>
                <div rootClassName={`${prefixCls}-content`}>
					<Row >
						<Col span={5}>
							<div rootClassName='selectBar'>
								<div rootClassName='buildingList'>
									<div rootStyle={{marginBottom: 16}}>
										<Search
											placeholder="请输入楼栋名称"
											// disabled={currentSelected && currentSelected.length}
											onSearch={(value) => this.listBuildings(communityId, value)}
										/>
									</div>
									<Table
										columns={this.getBuildingColumns()}
										rowKey="id"
										dataSource={buildingList}
										pagination={{position: 'bottom',
											pageSize: 20,
											total: buildingNum,
											hideOnSinglePage: true, }
										}
										loading={buildingLoading}
										scroll={{y: 'calc(100vh - 300px)'}}
									/>
								</div>
							</div>
						</Col>
						<Col span={8}>
							<div rootClassName='doorList'>
								<div rootStyle={{marginBottom: 16}}>
									<Search
										placeholder="请输入单元名称"
										onSearch={(value) => this.filterUnits(value)}
									/>
								</div>
								<div rootClassName='table'>
									<PaginationTable
										columns={this.getColumns()}
										rowKey="id"
										rowSelection={this.rowSelection()}
										dataSource={investmentCells}
										hidePagination={true}
										loading={apartmentLoading}
										scroll={{y: 'calc(100vh - 300px)'}}
									/>
								</div>
							</div></Col>
						<Col span={11}>
							<div rootClassName='titleBar'>
								<div rootClassName='left'>已选 ({pageSelectedValue}):</div>
								<div rootClassName='right' onClick={() => this.clearAll()}>
									<Icon type="delete" />
									<span rootClassName='delete'>全部清空</span>
								</div>
							</div>
							<div rootClassName='selectedBar'>
								<div rootClassName='selectedTable'>
									<PaginationTable
										displayNumero={true}
										columns={this.getSelectedColumns()}
										rowKey="id"
										dataSource={currentSelected}
										hidePagination={true}
										scroll={{y: 'calc(100vh - 300px)'}}
									/>
								</div>

							</div>
						</Col>
					</Row>
				</div>
                <div rootClassName={`${prefixCls}-footer`}>
					<div>
						<Button rootClassName='cancel' onClick={() => this.onCancel()} rootStyle={{marginRight: 8}}>取消</Button>
						<Button type='primary' rootClassName='ok' onClick={() => this.onOk()} rootStyle={{marginRight: 8}}>确认</Button>
					</div>
				</div>
            </Drawer>)
        );
	}
}

export default ChooseAddressModal;
