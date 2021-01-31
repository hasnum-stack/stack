import React from 'react';
import { gameContainer, gameInfo } from './index.scss';
import Board from '../board';

/**
 * 游戏界面
 *
 */
const game = () => {
  return (
    <>
      <div className={gameContainer}>
        <div>
          <Board />
        </div>
        <div className={gameInfo}>123</div>
      </div>
    </>
  );
};
export default game;
