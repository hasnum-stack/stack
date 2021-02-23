import type { FC, ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import Square from '../square';
import { currentStatus, boardRow } from './index.scss';

/**
 * 棋盘
 *
 */
const Board: FC = (): ReactElement => {
  const [squareListHistory, setSquareListHistory] = useState([]);

  const [squareList, setSquare] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(true);

  const [winner, setWinner] = useState('');

  const [winCondition] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ]);

  const handleClick = (index, value) => {
    if (winner) {
      console.info(`${winner}已经赢了`);
      return;
    }
    // 判断是否有值,有值不允许覆盖
    if (value) {
      console.warn(`这个地方有棋子${value}了`);
      return;
    }
    const parcelSquareList = squareList;
    const turnStringify = turn ? 'X' : 'O';
    parcelSquareList[index] = turnStringify;

    // 下棋
    setSquare(parcelSquareList);

    for (let i = 0; i < winCondition.length; i++) {
      const item = winCondition[i];
      const [square1, square2, square3] = item;

      if (
        parcelSquareList[square1] &&
        parcelSquareList[square1] === parcelSquareList[square2] &&
        parcelSquareList[square1] === parcelSquareList[square3]
      ) {
        console.log('🚀 ~ handleClick ~ parcelSquareList[square3]', square3);
        console.log('🚀 ~ handleClick ~ parcelSquareList[square2]', square2);
        console.log('🚀 ~ handleClick ~ parcelSquareList[square1]', square1);
        setWinner(turnStringify);
        break;
      }
    }
    if (!winner) {
      setTurn(!turn);
    }
  };
  const renderSquare = (i) => {
    return (
      <Square
        value={squareList[i]}
        // value={i}
        click={(value) => handleClick(i, value)}
      ></Square>
    );
  };
  return (
    <>
      <div className={currentStatus}>{winner ? `${winner}赢了` : `轮到${turn ? 'X' : 'O'}了`}</div>
      <div className={boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};
export default Board;
