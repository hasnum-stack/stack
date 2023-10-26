import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootApp = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log(rootApp);
const createRoot = ReactDOM.createRoot(document.getElementById('root'));
console.log(createRoot);
createRoot.render(rootApp);
