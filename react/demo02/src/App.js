import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentTestA from './refs/relay';
import Ex, { test1 } from './exouipipoipoi';
import TestA from './FcComponents/TestA';
class App extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      console.log((this.ref.current.value = 666));
    }, 1000);
  }
  render() {
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
          <ComponentTestA reftest={this.ref} />
          <TestA />
        </header>
      </div>
    );
  }
}

export default App;
