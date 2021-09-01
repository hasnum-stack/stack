import React from 'react';
import reactDom from 'react-dom';
import BaseDemo01 from './BaseDemo01';
// import BaseDemo02 from './BaseDemo02';

import '@formily/antd/dist/antd.css';
import 'antd/dist/antd.css';
function Index() {
  return (
    <>
      {/* <div>123</div> */}
      {/* <BaseDemo01></BaseDemo01> */}
      <BaseDemo02></BaseDemo02>
    </>
  );
}
reactDom.render(<Index />, document.getElementById('root'));
