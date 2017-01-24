'use strict';

import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import CardText from 'material-ui/Card/CardText';
import Avatar from 'material-ui/Avatar/Avatar';
import Button from 'material-ui/RaisedButton/RaisedButton';


const post = React.createClass({

  componentDidMount () {
    console.log(this.props.postData);
  },

  render() {
    return(
      <Card className="uiCard">
        <CardTitle>
          <h2 className="postTitle">Post Title</h2>
        </CardTitle>
        <CardText>
          <p className="postUser">{this.props.postData.username}</p>
          <p>{this.props.postData.description}</p>
        </CardText>
        <CardActions>
          <Button className="postAction">Favorite Post</Button>
          <Button className="postAction">Add Comment</Button>
        </CardActions>
      </Card>
    )
  }
})

export default post;
