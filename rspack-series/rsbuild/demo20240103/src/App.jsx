import { useEffect } from 'react';
import './App.css';
import { Button } from 'antd';
const service = async () => {
  return await Promise.resolve('hello');
};
const App = () => {
  let a = 12;
  function test() {
    console.log(a);
  }
  useEffect(() => {
    (async () => {
      const res = await service();
      console.log(res);
    })();
  }, []);
  return (
    <div className="content">
      <h1>Rsbuild with Reac1t</h1>
      <p>Start building amazing things with Rsbuild1.</p>
      <div>
        <Button type="primary">rspack with antd</Button>
      </div>
    </div>
  );
};

export default App;
