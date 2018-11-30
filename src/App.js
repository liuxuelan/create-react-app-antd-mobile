import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes/router'
import './App.scss';
import './style/style.less'
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
            {renderRoutes(routes)}
        </Router>
      </div>
    );
  }
}

export default App;
