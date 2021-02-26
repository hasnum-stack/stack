import React, { useContext, useState } from 'react';
import { squareBtn } from './index.scss';
import { ThemeContext } from '../game';

/**
 * 棋子
 *
 */
const Square = (props) => {
  const { value, click } = props;
  // const valuedsf = useContext(ThemeContext);
  // console.log('🚀 ~ Square ~ valuedsf', valuedsf);
  return (
    <>
      <button className={squareBtn} onClick={() => click(value)}>
        {value}
        {/* {valuedsf.has} */}
      </button>
    </>
  );
};

export default Square;
