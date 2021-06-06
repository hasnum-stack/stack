import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinaDuncan from './pages/LinaDuncan';
import LoganMcDonald from './pages/LoganMcDonald';
import { createBrowserHistory } from 'history';
console.log('🚀 ~ createBrowserHistory');
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <hr />
      <BrowserRouter>
        <Switch>
          <Route path="lina-duncan" component={LinaDuncan} />
          {/* <Route path="/logan-mcdonald" component={LoganMcDonald} /> */}
        </Switch>
      </BrowserRouter>
      <hr />

      <div
        style={{
          background: 'red',
        }}
        onClick={() => history.push('test')}>
        Router123123
      </div>
    </div>
  );
}

export default App;
