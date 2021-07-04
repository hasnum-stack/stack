import React from 'react';
import { connect } from 'react-redux';
import { Button, Space, Typography, Row, Col, Input } from 'antd';
import { plusActionModule1, minusActionModule1, asyncPlusActionModule1 } from './store/actions/module1';
class App2 extends React.Component {
  render() {
    const { value, plusActionModule1, minusActionModule1, asyncPlusActionModule1 } = this.props;
    return (
      <>
        <Row justify="center">
          <Col>
            <div>模块一</div>
            <Typography.Title
              style={{
                textAlign: 'center',
              }}>
              {value}
            </Typography.Title>
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  plusActionModule1(1);
                }}>
                点击 + 1
              </Button>
              <Button
                danger
                type="primary"
                onClick={() => {
                  minusActionModule1(1);
                }}>
                点击 - 1
              </Button>
              <Button
                onClick={() => {
                  asyncPlusActionModule1(1);
                }}>
                异步添加 + 1
              </Button>
            </Space>
          </Col>
        </Row>
        <hr />
        <div>
          模块二
          {/* <div>{bbb}</div> */}
          <Button
            onClick={() => {
              asyncPlusActionModule1(1);
            }}>
            点击 + 1
          </Button>
        </div>
      </>
    );
  }
}
export default connect(
  state => {
    return state.module1;
  },
  {
    plusActionModule1,
    minusActionModule1,
    asyncPlusActionModule1,
  }
)(App2);
