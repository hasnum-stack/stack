import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import TestNotification from './TestNotification';
import reportWebVitals from './reportWebVitals';

import SelectMultiple from './TodayBisheng/SelectMultiple';
ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // <SelectMultiple />,
  <TestNotification />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
