import { createContext, useState } from 'react';

const ContextInstance = createContext();
const ContextBus = ({ children, value }) => {
  const [contextValues, setContextValues] = useState({ a: 123 });
  return (
    <>
      <ContextInstance.Provider value={{ ...contextValues, setContextValues }}>{children}</ContextInstance.Provider>
    </>
  );
};

export { ContextBus, ContextInstance };
