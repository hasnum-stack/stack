import { createContext, useState } from 'react';

function CreateContextStore(initial = {}) {
  const ContextInstance = createContext();
  const ContextStore = ({ children, values = null }) => {
    const [contextValues, setContextValues] = useState(values || initial);
    return (
      <>
        <ContextInstance.Provider value={{ ...contextValues, setContextValues }}>{children}</ContextInstance.Provider>
      </>
    );
  };
  return [ContextStore, ContextInstance];
}
export { CreateContextStore };
// export { useContextStore, ContextInstance };

// export { ContextBus, ContextInstance };
