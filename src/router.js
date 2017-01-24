import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import landingContainer from './containers/landing.js';
import postsFeed from './containers/feed';
import profileContainer from './containers/profile.js'
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

        <Router history={browserHistory}>
          <Route path="/profile" component={profileContainer} />
        </Router>


    </div>

    )


  }
})

export default AppRouter;
