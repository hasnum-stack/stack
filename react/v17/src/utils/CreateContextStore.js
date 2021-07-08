import { createContext, useState } from 'react';
/**
 * 封装一层,默认添加上setContext的方法,因为在后续业务中可能会用到改变context的方法
 */
function CreateContextStore(initial = {}) {
  const ContextInstance = createContext();
  const ContextStore = ({ children, values = null }) => {
    const [contextValues, setContextValues] = useState(values || initial);
    return (
      <>
        <ContextInstance.Provider
          value={{
            ...contextValues,
            setContextValues: values => {
              //默认set方法不允许覆盖添加到最后
              setContextValues({ ...contextValues, ...values, setContextValues });
            },
          }}>
          {children}
        </ContextInstance.Provider>
      </>
    );
  };
  return [ContextStore, ContextInstance];
}
export { CreateContextStore };
// export { useContextStore, ContextInstance };

// export { ContextBus, ContextInstance };
