import React, { useState } from 'react';
import { ConfigProvider } from 'antd';

import Home from './pages/Home';

function App() {
  const [state, setState] = useState(0);
  console.log('🚀 ~ App ~ state', state);
  return (
    <React.Suspense>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
          },
        }}
      >
        <Home />
      </ConfigProvider>
    </React.Suspense>
  );
}
export default App;
