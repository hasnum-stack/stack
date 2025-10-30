import './App.css';
import './index.less';
// const A = () => <span>Rsbuild</span>;
// const B = () => <span>{[1, 2, 3].map(n => n * 2)}</span>;
const C = () => Object.entries({ a: 1, b: 2 }).map(([k, v]) => <span key={k}>{`${k}:${v}`}</span>);
const D = [1, 23].includes(23);
// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const App = () => {
  console.log('D:', D);
  // sleep(1000).then(() => {
  // console.log('Slept for 1 second');
  // });
  return (
    <div className="content">
      {/* <A /> */}
      {/* <B /> */}
      <C />
    </div>
  );
};

export default App;
