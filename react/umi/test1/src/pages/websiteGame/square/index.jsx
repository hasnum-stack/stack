import React, { useState } from "react";
import { squareBtn } from "./index.scss";

/**
 * 棋子
 *
 */
const square = (props) => {
  const { value, click } = props;
  const a = 1;
  return (
    <>
      <button className={squareBtn} onClick={() => click(value)}>
        {value}
      </button>
    </>
  );
};

export default square;
