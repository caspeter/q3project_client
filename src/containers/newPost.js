'use strict';

import React from 'react';
import NewPost from '../components/NewPostForm';

const newPost = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return (
      <NewPost></NewPost>
    )
  }
});

export default newPost;
