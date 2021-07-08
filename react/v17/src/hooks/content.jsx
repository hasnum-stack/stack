import React, { useState } from 'react';
// import { ContextBus } from './components/ContextBus';
import ComPonentw from './components/ComPonentw';
import { ContextStore } from '../context';

const Content = () => {
  const [contextvalues, setcontextvalues] = useState({ username: 'superawesome' });

  return (
    <>
      <ContextStore values={{ a: 890789 }}>
        <ComPonentw></ComPonentw>
      </ContextStore>
    </>
  );
};
// export { ContextInstance };
export default Content;
