import React from 'react';
import _ from './index.scss';
import Board from '../board';
const game = () => {
  return (
    <>
      <div className={_.game}>
        <div className={_.gameBoard}>
          <Board />
        </div>
        <div className={_.gameInfo}>123</div>
      </div>
    </>
  );
};
export default game;
