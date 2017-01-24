'use strict';

import React from 'react';
import Post from './Post';

const PostsContainer = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return(
      <div className="postsContainer">
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
})

export default PostsContainer;
