import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
// import 'antd/dist/antd.css';
import { plusActionModule1, minusActionModule1, asyncPlusActionModule1 } from './store/actions/module1';
class App2 extends React.Component {
  render() {
    const { value, plusActionModule1, minusActionModule1, asyncPlusActionModule1 } = this.props;
    return (
      <>
        <div>
          <div>模块一</div>
          <div>{value}</div>
          <Button
            onClick={() => {
              plusActionModule1(1);
            }}>
            点击 + 1
          </Button>
          <Button
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
        </div>
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
