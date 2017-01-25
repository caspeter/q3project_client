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
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import request from 'superagent';
var DATABASE_URL = 'http://localhost:5000';


const post = React.createClass({

  getInitialState () {
    return({
      comments: [],
      expanded: false
    })
    console.log(this.state.comments);
  },

  getComments() {
    let postId = this.props.postData.id
    request
    .get(DATABASE_URL + `/api/comments/${postId}`)
    .end((err, res) => {
      this.setState({comments: res.body});
    })
  },

  componentDidMount() {
    this.getComments();
  },

  render() {
    return(
      <Card className="uiCard">
        <CardTitle
          title={this.props.postData.title}
          subtitle={this.props.postData.username}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText className="cardBody">
          <p>{this.props.postData.description}</p>

          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Budget</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>${this.props.postData.budget}</TableRowColumn>
                <TableRowColumn>{this.props.postData.location}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>

        </CardText>
        <CardActions className="rightAlign">
          <Button
            label="Favorite Post"
            primary={true}
          />
        </CardActions>
        <CardText expandable={true}>
          <h3>Comments</h3>
          <div>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>User</TableHeaderColumn>
                  <TableHeaderColumn>Comment</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {
                  this.state.comments.map((comment) => {
                    return(
                      <TableRow>
                        <TableRowColumn>{comment.username}</TableRowColumn>
                        <TableRowColumn>{comment.commentBody}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }

              </TableBody>
            </Table>

          </div>
        </CardText>
      </Card>
    )
  }
})

export default post;
