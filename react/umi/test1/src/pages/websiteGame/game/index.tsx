import type { ReactElement } from 'react';
import React from 'react';
import type { clickType } from './data.d';
import { gameContainer, gameInfo } from './index.scss';
import Board from '../board';

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
          <button className="prettier-class" id="prettier-id" onClick={() => handleClick({ age: 1, name: 2 })}>
            Click Here
          </button>
        </div>
        <div className={gameInfo}>123</div>
      </div>
    </>
  );
};
const efsf = function () {
  console.log(1123);
};
console.log('🚀 ~ efsf', efsf);
const efksd = 1;
console.log('🚀 ~ efksd', efksd);
function test(): number {
  return 1;
}
test();
export default game;
class Dsfsdf {}
console.log('🚀 ~ Test', Dsfsdf);
