import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
//  Route, Link, Switch
import { renderRoutes } from 'react-router-config'
import { hot } from 'react-hot-loader'
import routes from './routes/router'
import { Provider } from 'react-redux'
import store from './rematch/index'

import './style/reset.scss'
import { Header } from './components/index'

const App = () => (
  <div className="App">
    <Header></Header>
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
// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <Header></Header>
//           <Router>
//               {renderRoutes(routes)}
//           </Router>
//         </div>
//       </Provider>
//     );
//   }
// }

export default hot(module)(reduxApp);
