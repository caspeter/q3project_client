'use strict';

import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';

const post = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return(
      <Card>
        <CardTitle>Hello World</CardTitle>
      </Card>
    )
  }
})

export default post;
