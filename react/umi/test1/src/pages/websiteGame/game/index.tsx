import React, { ReactElement } from 'react';
import { clickType } from './data.d';
import { gameContainer, gameInfo } from './index.scss';
import Board from '../board/index.jsx';

/**
 * 游戏界面
 *
 */
const game: React.FC = (): ReactElement => {
  const handleClick = (a: clickType): void => {
    console.log(a);
  };
  return (
    <>
      <div className={gameContainer}>
        <div>
          <div>213</div>
          <Board />
          <button
            className="prettier-class"
            id="prettier-id"
            onClick={() => handleClick({ age: 1, name: 2 })}
          >
            Click Here
          </button>
        </div>
        <div className={gameInfo}>123</div>
      </div>
    </>
  );
};
var efsf = function () {};
console.log('🚀 ~ efsf', efsf);
var efksd = 1;
console.log('🚀 ~ efksd', efksd);
function test(): number {
  return 1;
}
test();
export default game;
