'use strict';

import React from 'react';
import Post from './Post';
import request from 'superagent';

const DATABASE_URL = "http://localhost:5000"

var postsData = [
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
      postData: []
    });
  },

  getPostDataFromAPI() {
    request
    .get(DATABASE_URL + '/api/posts')
    .end((err, res) => {
      if(err) {
        console.log(err);
      }else{
        let postData = [];

        for(var post in res.body){
          postData.push(res.body[post])
        }

        console.log(postData);
        this.setState({postData: postData});
      }
    })
  },

  componentDidMount() {
    this.getPostDataFromAPI();
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
