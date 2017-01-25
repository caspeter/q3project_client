'use strict';

import React from 'react';
import Post from './Post';
import request from 'superagent';

var postData = [
        {
          "id": 1,
          "description": "I need someone to paint the inside of my dungeon",
          "location": "",
          "budget": 150,
          "imgUrl": "",
          "createdAt": "2017-01-24T05:03:07.058Z",
          "userId": 1,
          "username": "commandLineMurderer",
          "userBio": "",
          "skills": {
            "1": "painting",
            "2": "drawing"
          }
        },
        {
          "id": 2,
          "description": "Im just lookin for a talented young brother to roll me up some quality",
          "location": "",
          "budget": 4200,
          "imgUrl": "",
          "createdAt": "2017-01-24T05:03:07.057Z",
          "userId": 2,
          "username": "DOdoubleG",
          "userBio": "",
          "skills": {
            "1": "painting",
            "3": "sculpting"
          }
        }
    ]

const PostsContainer = React.createClass({

  getInitialState() {
    return ({
      postData: postData
    });
  },

  componentDidMount() {
    request
    .get('http://localhost:5000/api/posts')
    .then((res) => {
      this.state.postData = res.body;
      console.log(this.state.postData);
    })
  },

  render() {
    return(
      <div className="postsContainer">
        {
          this.state.postData.map(function (post) {
            return (
              <Post
                key={post.id}
                postData={post}
              />
            )
          })
        }
      </div>
    );
  }
})

export default PostsContainer;
