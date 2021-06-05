import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ChildrenComponent from './components/ChildrenComponent';
import type { childRefType } from './components/ChildrenComponent';

const Test6: React.FC = () => {
  const [state, setState] = useState(0);
  const childRef = useRef<childRefType>(null);
  // console.log('🚀 ~ childRef', childRef);
  useEffect(() => {
    const timer: NodeJS.Timer = setInterval(() => {
      console.log(Date.now());
    }, 200);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <Button
        onClick={() => {
          setState(state + 1);
          childRef.current?.setCount(state);
        }}
      >
        点击
      </Button>
      <ChildrenComponent ref={childRef}></ChildrenComponent>
    </div>
  );
};
export default Test6;
