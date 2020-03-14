import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Welcome from './components/Welcome';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Welcome />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();