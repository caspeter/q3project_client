import React from 'react';
import request from 'superagent';
import ProfileForm from '../components/Profile.js';

var profileContainer = React.createClass({
  render: function(){

    return(
      <div>
        {ProfileForm}
      </div>
    )
  }
});

export default profileContainer;
