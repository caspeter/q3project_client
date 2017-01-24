import React from 'react';
import request from 'superagent';
//import { connect } from 'react-redux';
// import Comment from './Comment.js';
// import Landing from './Landing.js';
// import Nav from './Nav.js';
// import NewPostForm from './NewPostForm.js';
// import Post from './Post.js';
// import PostsContainer from './PostsContainer';
// import Profile from './Profile';
import LoginForm from './Login.js';

const App = React.createClass({

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
    console.log(this.state);
  },

  render(){
    var Display =
      <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          handleLoginSubmit={this.handleLoginSubmit}
        >
        </LoginForm>
    return(
      <main>
        {Display}
      </main>

    );
  }

});

export default App;
