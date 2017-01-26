import React from 'react';
import TextField from 'material-ui/TextField';
import {grey100, grey900} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

var CreatePost = React.createClass({
  getInitialState () {
    return({
      title: "",
      description: "",
      zipCoe: "",
      budget: "",
      
    })
  },

  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.value);
    console.log(this.state.value);
    event.preventDefault();
  },

  render: function () {
    return (
      <Card className="uiCard">
      <div className="newPostContainer">
      <form onSubmit={this.state.value}>
        <h3>Create A New Post</h3>
        <div className="row newPostPadding">
          <label>
            Title:
            <TextField id="" type="text" name="postTitle" value={this.state.title} onChange={this.handleChange} required/>
          </label>
        </div>
        <div className="row">
        <div className="newPostPadding col-md-4">
          <label>
            Description:
            <TextField multiLine={true} rows={1} rowsMax={5} id="" type="text" name="postDescription" onChange={this.handleChange} required/>
          </label>
        </div>
        </div>
        <div className="newPostPadding">
          Project Location:
          <div>
            <label>
              Zip Code:
              <TextField id="" type="text" name="zipCode" onChange={this.handleChange} required/>
            </label>
          </div>
          </div>
        <div className="newPostPadding">
          Project Information:
          <div>
            <label>
              Budget
              <TextField id="" type="text" name="budget" onChange={this.handleChange} required/>
            </label>
            <div>
              <label>
                <div className="col-lg-6">Skills Needed:</div>
                <Checkbox label="None" type="checkbox" style={styles.checkbox} name="None" value="1"/>
                <Checkbox label="Painting" type="checkbox" style={styles.checkbox} name="Painting" value="2"/>
                <Checkbox label="Drawing" type="checkbox" style={styles.checkbox} name="Drawing" value="3"/>
                <Checkbox label="Sculpting" type="checkbox" style={styles.checkbox} name="Sculpting" value="4"/>
              </label>
            </div>
          </div>
          </div>
        <RaisedButton className="postSubmitButton" backgroundColor="#90C15B" type="submit" value="submit">Submit</RaisedButton>
      </form>
      </div>
      </Card>
    )
  }
})

export default CreatePost
