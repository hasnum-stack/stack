import React from 'react';
import { ContextInstance } from '../context';
class Demo01 extends React.Component {
  static contextType = ContextInstance;
  render() {
    console.log(this);
    return (
      <>
        <div>123</div>
        <button
          onClick={() => {
            this.context.setContextValues({
              a: 'Demo01',
              setContextValues: 123,
            });
          }}>
          点击改变
        </button>
      </>
    );
  }
}

export default Demo01;
