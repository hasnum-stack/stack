import type { FC, ReactElement } from 'react';
import { useState } from 'react';
import React from 'react';
import type { clickType } from './data.d';
import { gameContainer, gameInfo } from './index.scss';
import Board from '../board';

const defaultContext = {
  has: 1,
};
const ThemeContext = React.createContext(defaultContext);

/**
 * 游戏界面
 *
 */
const Game: FC = (): ReactElement => {
  console.log(123);
  const [context, changeContext] = useState(defaultContext);
  const [testRender, setTestRender] = useState(1);
  console.log('🚀 ~ context', context);

  const handleClick = (a: clickType): void => {
    console.log(a);
    const parcel = testRender + 1;
    setTestRender(parcel);
  };
  console.log('🚀 ~ handleClick ~ handleClick', handleClick);

  return (
    <>
      <div className={gameContainer}>
        <div>
          <div>{`testRender =>${testRender}`}</div>
          {/* <ThemeContext.Provider value={context}> */}
          <Board />
          {/* </ThemeContext.Provider> */}
          <button className="prettier-class" id="prettier-id" onClick={() => handleClick({ age: 1, name: 2 })}>
            Click Here
          </button>
          <button
            onClick={() => {
              const parcel = { ...context, has: context.has + 1 };
              changeContext(parcel);
            }}
          >
            改变context
          </button>
        </div>
        <div className={gameInfo}>123</div>
      </div>
    </>
  );
};

function test() {}

const efsf = function () {
  console.log(1123);
};
console.log('🚀 ~ efsf', efsf);
const efksd = 1;
console.log('🚀 ~ efksd', efksd);
test();
export { ThemeContext };
export default Game;
