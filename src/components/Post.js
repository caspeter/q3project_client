'use strict';

import React from 'react';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import CardText from 'material-ui/Card/CardText';
import Avatar from 'material-ui/Avatar/Avatar';
import Button from 'material-ui/RaisedButton';


const post = React.createClass({

  componentDidMount () {
    console.log(this.props.postData);
  },

  render() {
    return(
      <Card className="uiCard">
        <CardTitle
          title="Post Title"
          subtitle={this.props.postData.username}
        />
        <CardText
          content={this.props.postData.username}
        />
        <CardActions>
          <Button
            label="Favorite Post"
            primary='true'
          />
          <Button
            label="View Comments"
            primary="true"
          />
        </CardActions>
      </Card>
    )
  }
})

export default post;
