import React from 'react';
import { Router, browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import {grey100, grey900} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import request from 'superagent';

var DATABASE_URL = 'http://localhost:5000';

var CreatePost = React.createClass({
  getInitialState () {
    return({
      title: '',
      description: '',
      zipCode: '',
      budget: '',
      skills: []
    })
  },

  // ONCHANGE HANDLERS -----------------------

  titleHandleChange(event) {
    this.setState({title: event.target.value})
    // console.log(this.state);
  },

  descriptionHandleChange(event) {
    this.setState({description: event.target.value})
    console.log(this.state);
  },

  zipCodeHandleChange(event) {
    this.setState({zipCode: event.target.value})
    console.log(this.state);
  },

  budgetHandleChange(event) {
    this.setState({budget: event.target.value})
    console.log(this.state);
  },

  skillsHandleChange(event) {
    console.log(this.state.skills);
    let skillNum = event.target.value;
    if (this.state.skills.includes(event.target.value)) {
      console.log('state already has this number');
      let newArr = this.state.skills.slice();
      let numIndex = newArr.indexOf(skillNum);
      newArr.splice(numIndex, 1);
      this.setState({
        skills: newArr
      });
      console.log(this.state);
    } else {
      // console.log("before concat", this.state.skills);
      let changing = this.state.skills.concat([skillNum]);
      this.setState({skills: changing});
      // console.log("after concat", this.state.skills);
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.skills);
    // alert('A form was submitted: ' + this.state.value);
    // console.log(this.state.value);

    var postObjToSend = {
      title: this.state.title,
      description:this.state.description,
      location: this.state.zipCode,
      budget: this.state.budget,
      skills: this.state.skills
    }

    request
    .post(DATABASE_URL+`/api/posts/2`)
    .send(postObjToSend)
    .end((err,res)=>{
      if (err || !res.ok) {
        console.log('ERROR: ', err);
      } else {
        console.log(res.body);
        browserHistory.push('/feed');
      }
    })
  },

  render: function () {


    return (
      <Card className="uiCard">
        <div className="newPostContainer">
          <form onSubmit={this.handleSubmit}>
            <h3>Create A New Post</h3>
            <div className="row newPostPadding">
              <label>
                Title:
                <TextField
                  id="newPostTitle"
                  type="text"
                  name="postTitle"
                  value={this.state.title}
                  onChange={this.titleHandleChange}
                  // required
                />
              </label>
            </div>
            <div className="row">
              <div className="newPostPadding col-md-4">
                <label>
                  Description:
                  <TextField
                    multiLine={true} rows={1} rowsMax={5}
                    id=""
                    type="text"
                    name="postDescription"
                    value={this.state.description}
                    onChange={this.descriptionHandleChange}
                    // required
                  />
                </label>
              </div>
            </div>
            <div className="newPostPadding">
              Project Location:
              <div>
                <label>
                  Zip Code:
                  <TextField
                    id=""
                    type="text"
                    name="zipCode"
                    value={this.state.zipCode}
                    onChange={this.zipCodeHandleChange}
                    // required
                  />
                </label>
              </div>
            </div>
            <div className="newPostPadding">
              Project Information:
              <div>
                <label>
                  Budget
                  <TextField
                    id=""
                    type="text"
                    name="budget"
                    value={this.state.budget}
                    onChange={this.budgetHandleChange}
                    // required
                  />
                </label>
                <div>
                  <label>
                    <div className="col-lg-6">Skills Needed:</div>
                    <Checkbox
                      label="None"
                      type="checkbox"
                      style={styles.checkbox}
                      name="None"
                      value="1"
                      onCheck={this.skillsHandleChange}
                    />
                    <Checkbox
                      label="Painting"
                      type="checkbox"
                      style={styles.checkbox}
                      name="Painting"
                      value="2"
                      onCheck={this.skillsHandleChange}
                    />
                    <Checkbox
                      label="Drawing"
                      type="checkbox"
                      style={styles.checkbox}
                      name="Drawing"
                      value="3"
                      onCheck={this.skillsHandleChange}
                    />
                    <Checkbox
                      label="Sculpting"
                      type="checkbox"
                      style={styles.checkbox}
                      name="Sculpting"
                      value="4"
                      onCheck={this.skillsHandleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <RaisedButton
              className="postSubmitButton"
              backgroundColor="#90C15B"
              type="submit"
              value="submit">Submit</RaisedButton>

      </form>
      </div>
      </Card>
    )
  }
});

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default CreatePost
