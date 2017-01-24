import React from 'react';
import request from 'superagent';
import ProfileForm from '../components/UserProfileForm.js';

var profileContainer = React.createClass({
  render: function(){

    return(
      <div>
        <ProfileForm/>
      </div>
    )
  }
});

export default profileContainer;
