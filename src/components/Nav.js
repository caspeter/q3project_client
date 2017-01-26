/* eslint-disable */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const Nav = React.createClass({
  render: function(){
    return(
     <nav>

         <RaisedButton
            href="/"
            label="Home"
            primary={true}
          />
          { " " }
         <RaisedButton
            href="/profile"
            label="My Profile"
            primary={true}
          />
          { " " }
         <RaisedButton
            href="/Projects"
            label="My Projects"
            primary={true}
          />
          { " " }

          <RaisedButton
            onClick={this.props.handleLogoutSubmit}
            href="/"
            label="Logout"
            primary={true}
          />


    </nav>

   );
  }


});

export default Nav;
