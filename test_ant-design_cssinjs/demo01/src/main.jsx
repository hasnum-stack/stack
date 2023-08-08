import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <App />
    </StyleProvider>
  </React.StrictMode>
);
