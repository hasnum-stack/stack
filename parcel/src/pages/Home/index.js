import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import TestForm from './components/TestForm';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function Home() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={items2} />
        </Sider>
        <Layout>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="site-layout-background">
            <Button>点击</Button>
            Content
            <TestForm />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default Home;
