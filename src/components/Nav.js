'use strict';
//this will be our first stateless controller called Header

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

// this header component gets referenced on the app.js file.  the Header component
// is also imported on the app.js page
const Nav = React.createClass({
  render: function(){
    var buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };
    return(

     //using the indexLink component from react-router to handle this
     //index link that just has a slash and the 'activeClassName="active"'
     //piece of code says when that link is active, based on the route, go ahead
     //and apply a class for me.  So you can style the currently selected anchor
     //the header
     <nav>
      <div className="navWrapper">
        <RaisedButton
        className="navButton"
        href="/"
        label="Landing"
        primary={true}
        />
        <RaisedButton
        className="navButton"
        href="/myProfile"
        label="My Profile"
        primary={true}
        />
        <RaisedButton
        className="navButton"
        href="/myProjects"
        label="My Projects"
        primary={true}
        />
      </div>
     </nav>
     // putting a pipe between the links to keep layout simple
   );
  }


});

export default Nav;
