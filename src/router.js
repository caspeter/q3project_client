import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import landingContainer from './containers/landing.js';
import postsFeed from './containers/feed';
//import components:


var AppRouter = React.createClass({

  render: function(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={landingContainer} />
        </Router>

        <Router history={browserHistory}>
          <Route path="/feed" component={postsFeed} />
        </Router>
      </div>
    )


  }
})

export default AppRouter;
