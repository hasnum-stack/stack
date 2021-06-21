import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Example from './pages/Example';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">welcome</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/example">example</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/example" exact>
            <Example />
          </Route>
          <Route path="/" exact>
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
