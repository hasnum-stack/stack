import React, { useState } from 'react';
import { squareBtn } from './index.scss';

/**
 * 棋子
 *
 */
const square = (props) => {
  const { value, click } = props;
  return (
    <>
      <button className={squareBtn} onClick={click}>
        {value}
      </button>
    </>
  );
};

export default square;
