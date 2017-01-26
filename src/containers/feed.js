'use strict';

import React from 'react';
import PostsContainer from '../components/PostsContainer';
import Nav from '../components/Nav';

const feed = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return (
      <div>
      <Nav />
      <PostsContainer></PostsContainer>
      </div>
    )
  }
});


export default feed;
