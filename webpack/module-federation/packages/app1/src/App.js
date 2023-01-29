import React, { Suspense, useState } from 'react';
const RemoteApp = React.lazy(() => import('app2remotes/App'));

const App = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <div>
        <button onClick={() => setFlag(flag => !flag)}>点击切换flag状态{flag}</button>
      </div>
      {flag && (
        <Suspense fallback={'loading...'}>
          <RemoteApp />
        </Suspense>
      )}
    </div>
  );
};

export default App;
