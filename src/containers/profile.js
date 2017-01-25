import React from 'react';
import request from 'superagent';
import ProfileForm from '../components/UserProfileForm.js';

var profileContainer = React.createClass({

  getInitialState(){
    return ({
      username: '',
      password: ''
    });
  },

  componentDidMount(){
    console.log(this.state);
  },

  handleProfileSubmit(formState, event){
    console.log(formState);
    event.preventDefault();
    console.log('profile Submitted click');
  },

  render: function(){
    var profileForm = (true) ?
    <ProfileForm
      handleProfileSubmit={this.handleProfileSubmit}
      /> : null
    return(
      <div>
        {profileForm}

      </div>
    )
  }
});

export default profileContainer;
