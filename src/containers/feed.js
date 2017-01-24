'use strict';

import React from 'react';
import PostsContainer from '../components/PostsContainer';
import NavBar from '../components/Nav';

const feed = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return (
      <div>
      <NavBar/>
      <PostsContainer></PostsContainer>
      </div>
    )
  }
});

export default feed;
