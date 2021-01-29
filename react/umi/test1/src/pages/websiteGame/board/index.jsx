import React, { useState } from 'react';
import Square from '../square';
import style from './index.scss';
const board = () => {
  const [status, setStatus] = useState('1');
  return (
    <>
      <div className={style.status}>{status}</div>
      <div className={style['board-row']}>
        <Square value={1}></Square>
        <Square value={2}></Square>
        <Square value={3}></Square>
      </div>
      <div className={style['board-row']}>
        <Square value={4}></Square>
        <Square value={5}></Square>
        <Square value={6}></Square>
      </div>
      <div className={style['board-row']}>
        <Square value={7}></Square>
        <Square value={8}></Square>
        <Square value={9}></Square>
      </div>
    </>
  );
};
export default board;
