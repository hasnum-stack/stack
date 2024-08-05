import React, { useCallback } from 'react';
import { Drawer, Col, Row } from 'antd';
import { PaginationTable } from 'components';
import { callApi } from 'utils';
import { useSetState, useUpdateEffect } from './hooks';
import { api } from '../../config';
import './index.less';
const prefixCls = 'settle-bill-content';

// 侧边栏的hooks
const useDrawer = () => {
  const [drawer, setDrawer] = useSetState({
    visible: false,
    settleBill: {},
    billId: '',
  });

  // 获取账单详情
  const fetchBillDetail = useCallback(() => {
    callApi({
      api: api.findBill,
      data: {
        id: drawer.billId,
      },
    }).then(res => {
      setDrawer({
        settleBill: res,
      });
    });
  }, [drawer.billId]);
  useUpdateEffect(() => {
    drawer.billId && fetchBillDetail();
  }, [drawer.billId]);
  const setBillState = useCallback((visible, id) => {
    setDrawer({
      visible,
      billId: id,
    });
  }, []);
  const getColumns = useCallback(() => {
    return [
      {
        title: '操作时间',
        dataIndex: 'operateTime',
      },
      {
        title: '内容',
        dataIndex: 'content',
      },
      {
        title: '操作人',
        dataIndex: 'operatorName',
      },
    ];
  }, []);
  const renderDrawer = () => {
    return (
      <Drawer
        title='详情'
        width={600}
        placement='right'
        onClose={() =>
          setDrawer({
            visible: false,
            billId: '',
          })
        }
        open={drawer.visible}
      >
        <div className={`${prefixCls}-panel`}>
          <p className={`${prefixCls}-panel_title`}>结算金额</p>
          <p className={`${prefixCls}-panel_money`}>
            <span className={`${prefixCls}-panel_sub`}>￥</span>
            <span>{drawer.settleBill?.amount}</span>
          </p>
          <div className={`${prefixCls}-panel_info`}>
            <Row gutter={[10, 10]}>
              <Col span={12} className={`${prefixCls}-panel_col`}>
                <span className={`${prefixCls}-panel_label`}>结算方</span>
                <span>{drawer.settleBill?.settlementPartyName}</span>
              </Col>
              <Col span={12} className={`${prefixCls}-panel_col`}>
                <span className={`${prefixCls}-panel_label`}>结算方类型</span>
                <span>{drawer.settleBill?.settlementPartyType}</span>
              </Col>
              <Col span={12} className={`${prefixCls}-panel_col`}>
                <span className={`${prefixCls}-panel_label`}>结算商户</span>
                <span>{drawer.settleBill?.merchantName}</span>
              </Col>
              <Col span={12} className={`${prefixCls}-panel_col`}>
                <span className={`${prefixCls}-panel_label`}>关联消费地</span>
                <span>{drawer.settleBill?.consumptionPlace}</span>
              </Col>
              <Col span={12} className={`${prefixCls}-panel_col`}>
                <span className={`${prefixCls}-panel_label`}>结算内容</span>
                <span>{drawer.settleBill?.settlementContent}</span>
              </Col>
            </Row>
          </div>
        </div>
        <PaginationTable
          columns={getColumns()}
          className={`${prefixCls}-table`}
          rowKey={record => record.id}
          dataSource={drawer.settleBill?.infos || []}
          hidePagination
          showSizePagination
        />
      </Drawer>
    );
  };
  return {
    setBillState,
    renderDrawer,
  };
};
export default useDrawer;
