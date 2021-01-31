import React, { useState } from 'react';
import style from './index.scss';

/**
 * 棋子
 *
 */
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

export default square;
