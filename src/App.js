import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
//  Route, Link, Switch
import { renderRoutes } from 'react-router-config'

import routes from './routes/router'
import { Provider } from 'react-redux'
import store from './redux/store'

import './style/reset.scss'
import { Header } from './components/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
          <Router>
              {renderRoutes(routes)}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
