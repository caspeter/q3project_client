import React from 'react';
import NewPost from '../components/NewPostForm';

const newPost = React.createClass({
  getInitialState() {
    return ({
      username: '',
      password: ''
    })
  },

  render() {
    return (
      <div className="postsContainer">
        <NewPost></NewPost>
      </div>
    )
  }
});

export default newPost;
