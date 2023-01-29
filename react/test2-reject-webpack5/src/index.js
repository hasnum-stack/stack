import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, Row, Col, Input } from 'antd';
import { Form } from '@ant-design/compatible';
console.log('🚀 ~ Form', Form.Item);
ConfigProvider.config({
  prefixCls: 'cnmm',
});
console.log('🚀 ~ Input', Input);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ConfigProvider prefixCls="cnmm">
      <Form>
        {/* <Row className='123'>
          <Col>
            123 */}
        <Form.Item>
          <Input></Input>
        </Form.Item>
        {/* </Col> */}
        {/* </Row> */}
      </Form>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
