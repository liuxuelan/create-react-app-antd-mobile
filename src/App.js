import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
//  Route, Link, Switch
import { renderRoutes } from 'react-router-config'
import { hot } from 'react-hot-loader'
import routes from './routes/router'
import { Provider } from 'react-redux'
import store from './rematch/index'

import './style/reset.scss'

const App = () => (
  <div className="App">
    <Router>
        {renderRoutes(routes)}
    </Router>
  </div>
)
const reduxApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

export default hot(module)(reduxApp);
