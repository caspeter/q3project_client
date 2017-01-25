'use strict';
import React from 'react';
import request from 'superagent';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';


var landingContainer = React.createClass({

    getInitialState(){
      return ({
        username: '',
        password: ''
      });
    },

    componentDidMount(){
      console.log(this.state);
    },

    handleUsername(event){
      console.log('username change')
      this.setState({username:event.target.value})
    },
    handlePassword(event){
      this.setState({password:event.target.value})
    },

    handleLoginSubmit(event){
      event.preventDefault();
      sessionStorage.setItem( 'username', this.state.username );
    //  console.log(sessionStorage.username);
    },

    handleLogoutSubmit(event){
      sessionStorage.removeItem('username', this.state.username );
    },




render: function(){



    var login = (true) ?
    <LoginForm
      username={this.state.username}
      password={this.state.password}
      handleUsername={this.handleUsername}
      handlePassword={this.handlePassword}
      handleLoginSubmit={this.handleLoginSubmit}
    /> : null;







    sessionStorage.getItem('username');
    const isLogged = (sessionStorage.username) ?
      <Nav /> : <Nav1 />



  return(

    <div>

      {isLogged}
      {login}
    </div>
  );

  }
});

export default landingContainer;
