import React from 'react';
import { Row, Col } from 'antd';

const test4 = () => {
  // eslint-disable-next-line
  for (var i = 0; i < 5; i++) {
    // eslint-disable-next-line
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
  return (
    <Row>
      <Col lg={7} md={24}>
        2
      </Col>
      <Col lg={15} md={24}>
        1
      </Col>
    </Row>
  );
};

export default test4;
