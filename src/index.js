import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import store from './store';
//import App from './components/App.js';
//import './index.css';
import Router from './router.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
  //<Provider store={store}>
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  //</Provider>
  ,
  document.getElementById('root')
);
