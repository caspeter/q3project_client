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

  // getInitialState(){
  //   return state;
  // },

  componentDidUpdate(){
    console.log('updated')
  },

  handleLoginSubmit(event) {
    event.preventDevault();
    console.log('clicked submit');
  },

  render(){
    <LoginForm></LoginForm>
    return(
      //<div> TESTING </div>
      <LoginForm></LoginForm>
    );
  }

});

export default App;
