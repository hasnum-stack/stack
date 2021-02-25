import React, { useReducer } from 'react';
import { Button } from 'antd';
import type { FC, ReactElement } from 'react';

interface counterAction {
  type: 'decrement' | 'increment';
}

interface counter {
  count: number;
}

const initCount: counter = {
  count: 0,
};

/**
 * @param state
 * @param action
 *
 */
const countReducer = (state: counter, action: counterAction): counter => {
  if (action.type === 'decrement') {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === 'increment') {
    return { ...state, count: state.count + 1 };
  }
  return state;
};
const Test5: FC = (): ReactElement => {
  const [counter, dispatchCount] = useReducer(countReducer, initCount);
  return (
    <>
      <Button onClick={() => dispatchCount({ type: 'decrement' })}>增加</Button>
      <span>{counter.count}</span>
      <Button onClick={() => dispatchCount({ type: 'increment' })}>减少</Button>
    </>
  );
};
export default Test5;
