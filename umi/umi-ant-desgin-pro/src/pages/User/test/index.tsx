import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';
const test: React.FC = () => {
  return (
    <>
      <Button type="ghost" onClick={() => history.push(`login`)}>
        Go Login
      </Button>
    </>
  );
};
export default test;
