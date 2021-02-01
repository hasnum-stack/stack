import React, { useEffect, useState } from 'react';
import Square from '../square';
import { currentStatus, boardRow } from './index.scss';

/**
 * 棋盘
 *
 */
const board = () => {
  const [squareList, setSquare] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const handleClick = (index) => {
    const parcelSquareList = squareList;
    parcelSquareList[index] = turn ? 'X' : 'O';
    setSquare(parcelSquareList);
    setTurn(!turn);
  };
  const renderSquare = (i) => {
    return <Square value={squareList[i]} click={() => handleClick(i)}></Square>;
  };
  return (
    <>
      {squareList}
      <div className={currentStatus}>{`轮到${turnStringify}了`}</div>
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
export default board;
