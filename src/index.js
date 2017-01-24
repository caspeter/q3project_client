import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import store from './store';
//import App from './components/App.js';
//import './index.css';
import Router from './router.js';

ReactDOM.render(
  //<Provider store={store}>
    <Router />
  //</Provider>
  ,
  document.getElementById('root')
);
