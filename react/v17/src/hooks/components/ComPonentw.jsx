import React, { useContext } from 'react';
import { ContextInstance } from '../../context';
// import { ContextInstance } from '../../customHooks/useContextStore';

import Demo01 from '../../class/demo01';

const ComPonentw = () => {
  const tt = useContext(ContextInstance);
  return (
    <>
      <div>test</div>
      <Demo01></Demo01>
      tt.a{tt?.a}
      <button
        onClick={() => {
          tt.setContextValues({ a: 9999999 });
        }}>
        点击
      </button>
    </>
  );
};

export default ComPonentw;
