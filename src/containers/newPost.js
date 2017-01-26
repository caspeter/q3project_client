'use strict';

import React from 'react';
import NewPost from '../components/NewPostForm';

const newPost = React.createClass({
  getInitialState() {
    return null;
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
