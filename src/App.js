import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
//  Route, Link, Switch
import { renderRoutes } from 'react-router-config'

import routes from './routes/router'
import './App.scss';
import './style/reset.scss'
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
