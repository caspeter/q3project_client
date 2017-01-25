import React from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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
      <div className="profileContainer">
        <form onSubmit={this.props.handleProfileSubmit.bind(null, this.state)}>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text"
                id="username" floatingLabelText="Username" onChange={this.setValue.bind(this, 'username')} value={this.state.username}/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text" floatingLabelText="Password" id="password" value={this.state.password} onChange={this.setValue.bind(this, 'password')}/>
            </div>
          </div>

          <h3>Contact Information</h3>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text"
                id="firstname" floatingLabelText="First Name" onChange={this.setValue.bind(this, 'firstName')} value={this.state.firstName}/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text"
                id="lastname" floatingLabelText="last Name" onChange={this.setValue.bind(this, 'lastName')} value={this.state.lastName}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text" floatingLabelText="Phone Number" value={this.state.phoneNumber} onChange={this.setValue.bind(this, 'phoneNumber')}/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text" floatingLabelText="Email Address" value={this.state.email} onChange={this.setValue.bind(this, 'email')}/>
            </div>
          </div>

          <h3>Your Location</h3>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Zip" value={this.state.zipCode} onChange={this.setValue.bind(this, 'zipCode')}/>
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
             >
              <MenuItem value={'painting'} primaryText="Painting" onChange={this.setValue.bind(this, 'skill')}/>
              <MenuItem value={1} primaryText="Drawing" />
              <MenuItem value={2} primaryText="Sculpting" />
              <MenuItem value={3} primaryText="None" />
           </SelectField>


            <br></br>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Profile URL" value={this.state.profileUrl} onChange={this.setValue.bind(this, 'profileUrl')}/>
                </div>
                <div className="col-sm-offset-2 col-md-5">
                  <TextField type="text" floatingLabelText="Personal Website" value={this.state.website} onChange={this.setValue.bind(this, 'website')}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Bio" value={this.state.userBio} onChange={this.setValue.bind(this, 'userBio')}/>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-12 profileSubmitButton">
                  <RaisedButton type="submit" label="Submit" />
                </div>
            </div>
        </form>
      </div>
    );
  }
});

export default ProfileForm;
