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
          <img className="logo" src="img/ArtOps.png"/>
          <RaisedButton
          className="navButton"
             href="/feed"
             label="Home"
             backgroundColor="#90C15B"
           />
           { " " }
          <RaisedButton
          className="navButton"
             href="/myProfile"
             label="My Profile"
             backgroundColor="#90C15B"
           />
           { " " }
          <RaisedButton
          className="navButton"
             href="/newPost"
             label="New Project"
             backgroundColor="#90C15B"
           />
           { " " }

          <RaisedButton
          className="navButton"
             onClick={this.props.handleLogoutSubmit}
             label="Logout"
             backgroundColor="#90C15B"
           />
       </div>
     </nav>


   );
  }


});

export default Nav;
