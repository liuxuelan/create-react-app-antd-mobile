import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes/router'
import logo from './logo.svg';
import './App.scss';
import './style/style.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    );
  }
}

export default App;
