'use strict';

import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import CardText from 'material-ui/Card/CardText';
import Avatar from 'material-ui/Avatar/Avatar';

const post = React.createClass({

  componentDidMount () {
    console.log(this.props.postData);
  },

  render() {
    return(
      <Card className="uiCard">
        <Avatar/>
        <CardTitle>Post Title</CardTitle>
        <CardText>{this.props.postData.description}</CardText>
      </Card>
    )
  }
})

export default post;
