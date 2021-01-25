import React from 'react';
import { contextBus } from './components/ContextBus';
import ComPonentw from './components/ComPonentw';

const content = () => {
    return (
        <>
            <contextBus.Provider
                value={{
                    username: 'superawesome',
                }}>
                <ComPonentw></ComPonentw>
            </contextBus.Provider>
        </>
    );
};

export default content;
