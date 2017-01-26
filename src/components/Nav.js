/* eslint-disable */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const Nav = React.createClass({
  render: function(){
    var buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };
    return(
      <nav>
         <div className="navWrapper">
          <RaisedButton
          className="navButton"
             href="/"
             label="Home"
             primary={true}
           />
           { " " }
          <RaisedButton
          className="navButton"
             href="/myProfile"
             label="My Profile"
             primary={true}
           />
           { " " }
          <RaisedButton
          className="navButton"
             href="/myProjects"
             label="My Projects"
             primary={true}
           />
           { " " }

          <RaisedButton
          className="navButton"
             onClick={this.props.handleLogoutSubmit}
             href="/"
             label="Logout"
             primary={true}
           />
       </div>
     </nav>

   );
  }


});

export default Nav;
