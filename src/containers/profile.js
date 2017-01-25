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

    request
    //.get('http://localhost:5000/api/users/1')
      .post('http://localhost:5000/api/users/')
      // .set('Content-Type', 'application/json')
      .send(formState)
      .end(function(err, res){
        if (err || !res.ok){
          alert("error posting new user profile");
        } else {
          console.log(res.body);
          alert('new user posted' + JSON.stringify(res.body));
        }
      });

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
