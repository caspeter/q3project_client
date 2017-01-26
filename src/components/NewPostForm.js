import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
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
      comments: [],
      skills: [],
      expanded: false,
      addCommentText: ''
    })
  },

  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  handleSubmit(event) {
    event.preventDefault();
  },

  render: function () {
    return (
      <Card className="newPostCard">
      <CardText>
      <form>
        <label>
          Title:
          <TextField id="" type="text" name="postTitle"/>
        </label>
        <div>
          <label>
            Description:
            <TextField multiLine={true} rows={1} rowsMax={5} id="" type="text" name="postDescription"/>
          </label>
        </div>
        <div>
          Project Location:
          <div>
            <label>
              Zip Code:
              <TextField id="" type="text" name="zipCode"/>
            </label>
          </div>
          </div>
        <div>
          Project Information:
          <div>
            <label>
              Budget
              <TextField id="" type="text" name="budget"/>
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
        <RaisedButton type="submit" value="submit">Submit</RaisedButton>
      </form>
      </CardText>
      </Card>
    )
  }
})

export default CreatePost
