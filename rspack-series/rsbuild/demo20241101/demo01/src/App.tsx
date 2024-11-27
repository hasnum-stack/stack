import './App.css';
import { useState } from 'react';
import ProListTest from './components/ProListTest';
// import List from './components/List';
// import { ProCard } from '@ant-design/pro-components';
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='content'>
      {count}
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button
        type='submit'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Do something
      </button>
      {/* <Detail /> */}
      {/* {test.name} */}
      {/* <List /> */}
      {/* <ProCard /> */}
      <ProListTest />
    </div>
  );
};

export default App;
