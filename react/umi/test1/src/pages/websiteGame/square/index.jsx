import React, { useState } from 'react';
import style from './index.scss';

const square = (props) => {
  //   const { value } = props;
  const [value, setValue] = useState(null);
  return (
    <>
      <button className={style.square} onClick={() => setValue('X')}>
        {value}
      </button>
    </>
  );
};

var obj = {
  a: function functionName(num) {
    console.log(num);
  },
};
var next = obj.a;

obj.a(3);

function b(num) {
  console.log('额外操作');
  next(num);
}

obj.a = b;
obj.a(33333);

//3
//额外操作
//33333

export default square;
