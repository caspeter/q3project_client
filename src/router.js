import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import landingContainer from './containers/landing.js';

//import components:


var AppRouter = React.createClass({

  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={landingContainer} />
      </Router>
    )


  }
})

export default AppRouter;
