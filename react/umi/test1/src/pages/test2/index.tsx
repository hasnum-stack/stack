import React, { useState } from 'react';
import styles from './index.less';
import { PageLoading, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal } from 'antd';
import FormRegister from './FormRegister';
export default function IndexPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modelId, setmodelId] = useState(NaN);

  const handleTurnOnModel = (id: number): void => {
    setmodelId(id);
    setIsModalVisible(true);
  };

  const contentList = (
    <>
      <Button onClick={() => handleTurnOnModel(1)}>34234</Button>
      <Button onClick={() => handleTurnOnModel(2)}>34234</Button>
      <Button onClick={() => handleTurnOnModel(3)}>34234</Button>
      <Button onClick={() => handleTurnOnModel(4)}>34234</Button>
    </>
  );

  const handleCancel = (): void => {
    setIsModalVisible(false);
  };

  return (
    <PageContainer //   content="欢迎使用 ProLayout 组件"
      tabList={[
        {
          tab: '基本信息',
          key: 'base',
        },
        {
          tab: '详细信息',
          key: 'info',
        },
      ]}
      extra={[
        <Button key="3">{`操作`}</Button>,
        <Button key="2">{`操作`}</Button>,
        <Button key="1" type="primary">
          {`主操作`}
        </Button>,
      ]}
      content={contentList}
    >
      <FormRegister />
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <div>{modelId}</div>
      </Modal>
    </PageContainer>
  );
}
