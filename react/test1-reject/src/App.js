import logo from './logo.svg';
import apppp from './App.t.scss';
console.log('apppp', apppp);

function App() {
  return (
    <div className={apppp.apppp}>
      <header className={apppp['App-header']}>
        <img src={logo} className={apppp['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={apppp['App-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React123
        </a>
      </header>
    </div>
  );
}

export default App;
