import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import * as styles from './index.module.less';
console.log(styles);
const Page1 = React.lazy(() => import('./pages/Page1'));
/**
 * useEffect 依赖性非state,会在渲染时判断
 * setCount, 触发渲染,会重新执行useEffect
 */
window.count = 1;
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('window.count:', window.count);
  }, [window.count]);
  return (
    <div className="App">
      <div className="test">aa</div>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button
          onClick={() => {
            window.count++;
          }}
        >
          点击增加window
        </button>
      </div>
      <p className="read-the-docs">Click on the Rspack and React logos to learn more</p>
      <Page1 />
    </div>
  );
}

export default App;
