'use strict';

import React from 'react';
import PostsContainer from '../components/PostsContainer';

const feed = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return (
      <PostsContainer></PostsContainer>
    )
  }
});

export default feed;
