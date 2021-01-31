import React, { useState } from 'react';
import Square from '../square';
import { currentStatus, boardRow } from './index.scss';

/**
 * 棋盘
 *
 */
const board = () => {
  const [status, setStatus] = useState('1');
  return (
    <>
      <div className={currentStatus}>{status}</div>
      <div className={boardRow}>
        <Square value={1}></Square>
        <Square value={2}></Square>
        <Square value={3}></Square>
      </div>
      <div className={boardRow}>
        <Square value={4}></Square>
        <Square value={5}></Square>
        <Square value={6}></Square>
      </div>
      <div className={boardRow}>
        <Square value={7}></Square>
        <Square value={8}></Square>
        <Square value={9}></Square>
      </div>
    </>
  );
};
export default board;
