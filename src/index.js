import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible/flexible.js'
import VConsole from 'vconsole' // 手机端测试用
new VConsole() // 手机端测试用

require('es6-promise').polyfill()



const FastClick = require('fastclick')
FastClick.attach(document.body) // 解决点击延迟问题

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();