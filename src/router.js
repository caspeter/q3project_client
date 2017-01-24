import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:


//import components:
import login from "./components/login.js";

var AppRouter = React.createClass({

  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path="/" container={LandingPage} />
      </Router>
    )


  }
})
