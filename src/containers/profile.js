import React from 'react';
import request from 'superagent';
import ProfileForm from '../components/UserProfileForm.js';
import { Router, browserHistory } from 'react-router'
import routes from '../router'

var DATABASE_URL = 'http://localhost:5000';

var profileContainer = React.createClass({

  getInitialState(){
    return ({
      username: '',
      password: ''
    });
  },

  componentDidMount(){
  },

  handleProfileSubmit(formState){
    console.log(formState);

    request
      .post(DATABASE_URL + '/api/users/')
      .send(formState)
      .end(function(err, res){
        if (err || !res.ok){
          alert("error posting new user profile");
        } else {
          console.log(res.body);
          browserHistory.push('/feed')
        }
      });

  },


  render: function(){
    var profileForm = (true) ?
    <ProfileForm
      onProfileSubmit={this.handleProfileSubmit}
      disabled={false}
      /> : null

    return(
      <div>
        {profileForm}
    </div>
    )
  }
});

export default profileContainer;
