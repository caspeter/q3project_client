import React from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import CardText from 'material-ui/Card/CardText';
import Avatar from 'material-ui/Avatar/Avatar';


const ProfileForm = React.createClass({

  getInitialState(){
    return ({
      skills:[1]
    });
  },

  handleChange(event, index, value){
    console.log(this.state);
    this.setState({value});
  },

  setValue: function (field, event) {
    //If the input fields were directly within this
    //this component, we could use this.refs.[FIELD].value
    //Instead, we want to save the data for when the form is submitted
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },

  render: function(){
    return(
      <Card className="uiCard">
        <div className="profileContainer">
          <h3>Please Enter Your Information</h3>
          <form onSubmit={this.props.handleProfileSubmit.bind(null, this.state)}>

            <div className="row">
              <div className="col-md-5">
                <TextField type="text"
                  id="username" floatingLabelText="Username" onChange={this.setValue.bind(this, 'username')} value={this.state.username} required/>
              </div>
              <div className="col-sm-offset-2 col-md-5">
                <TextField type="text" floatingLabelText="Password" id="password" value={this.state.password} onChange={this.setValue.bind(this, 'password')} required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <TextField type="text"
                  id="firstname" floatingLabelText="First Name" onChange={this.setValue.bind(this, 'firstName')} value={this.state.firstName} required />
              </div>
              <div className="col-sm-offset-2 col-md-5">
                <TextField type="text"
                  id="lastname" floatingLabelText="Last Name" onChange={this.setValue.bind(this, 'lastName')} value={this.state.lastName} required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <TextField type="number" floatingLabelText="Phone Number" value={this.state.phoneNumber} onChange={this.setValue.bind(this, 'phoneNumber')} required/>
              </div>
              <div className="col-sm-offset-2 col-md-5">
                <TextField type="text" floatingLabelText="Email Address" value={this.state.email} onChange={this.setValue.bind(this, 'email')} required/>
              </div>
            </div>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="number" floatingLabelText="Zip Code" value={this.state.zipCode} onChange={this.setValue.bind(this, 'zipCode')} required/>
                </div>
                <div className="col-sm-offset-2 col-md-5">
                </div>
              </div>
            <h3>About</h3>
            <br></br>

              <SelectField
                floatingLabelText="Skill"
                value={this.state.value}
                onChange={this.handleChange}
                required
               >
                <MenuItem value={0} primaryText="Painting" onChange={this.setValue.bind(this, 'skill')}/>
                <MenuItem value={1} primaryText="Drawing" onChange={this.setValue.bind(this, 'skill')}/>
                <MenuItem value={2} primaryText="Sculpting" onChange={this.setValue.bind(this, 'skill')}/>
                <MenuItem value={3} primaryText="None" onChange={this.setValue.bind(this, 'skill')}/>
             </SelectField>


              <br></br>
                <div className="row">
                  <div className="col-md-5">
                    <TextField type="text" floatingLabelText="Profile URL" value={this.state.profileUrl} onChange={this.setValue.bind(this, 'profileUrl')} required/>
                  </div>
                  <div className="col-sm-offset-2 col-md-5">
                    <TextField type="text" floatingLabelText="Personal Website" value={this.state.website} onChange={this.setValue.bind(this, 'website')} required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <TextField type="text" floatingLabelText="Bio" value={this.state.userBio} onChange={this.setValue.bind(this, 'userBio')} required/>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-12 profileSubmitButton">
                    <Button type="submit" label="Submit" primary={true}
                    className="buttonBackground"
                    backgroundColor="#90C15B" />
                  </div>
              </div>
          </form>
        </div>
      </Card>
    );
  }
});

export default ProfileForm;
