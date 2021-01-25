import React, { useContext } from 'react';
import { contextBus } from './ContextBus';

const ComPonentw = () => {
    const tt = useContext(contextBus);
    console.log('context', tt);
    return (
        <>
            <div>test</div>
        </>
    );
};

export default ComPonentw;
