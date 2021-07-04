import React from 'react';
import { connect, batch } from 'react-redux';
import { increment, incrementByAmount, incrementAsync } from '../counter/counterSlice';

class ClassTestRedux extends React.Component {
  render() {
    const { status, value, dispatch, increment, incrementAsync, incrementByAmount } = this.props;
    return (
      <>
        <div>{status}</div>
        <div>value:{value}</div>
        <button
          onClick={() => {
            // dispatch(increment());
            // dispatch(increment());
            // dispatch(increment());
            // batch(() => {
            // increment();
            // increment();
            // increment();
            // increment();
            // });
            // batch(() => {
            for (let index = 0; index < 90000; index++) {
              increment(1);
            }
            // });
          }}>
          点击新增
        </button>
        <button onClick={() => incrementByAmount(666)}>点击新增 666</button>
      </>
    );
  }
}
export default connect(
  state => {
    return {
      status: state.counter.status,
      value: state.counter.value,
    };
  },
  {
    increment,
    incrementByAmount,
    incrementAsync,
  }
)(ClassTestRedux);
