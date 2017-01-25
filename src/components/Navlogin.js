'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const Nav1 = React.createClass({
  render: function(){
    return(
     <nav>

         <RaisedButton
            href="/"
            label="Home"
            primary={true}
          />
     </nav>
   );
  }


});

export default Nav1;
