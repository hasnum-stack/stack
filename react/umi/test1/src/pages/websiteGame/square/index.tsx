import type { FC } from 'react';
import React, { useContext } from 'react';
import { squareBtn } from './index.scss';
import { ThemeContext } from '../game';

interface ISquare {
  value: string;
  click: (value: string) => void;
}

/**
 * 棋子
 */
const Square: FC<ISquare> = ({ value, click }) => {
  const valueContext = useContext(ThemeContext);
  console.log(valueContext);

  return (
    <>
      <button className={squareBtn} onClick={() => click(value)}>
        {value}
      </button>
    </>
  );
};

export default Square;
