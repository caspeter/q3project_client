import React from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const ProfileForm = React.createClass({

  getInitialState(){
    return ({
      firstname:''
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
    console.log(this.state);
  },

  render: function(){
    return(
      <div className="profileContainer">
        <form onSubmit={this.props.handleProfileSubmit}>
          <h3>Contact Information</h3>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text"
                id="firstname" floatingLabelText="First Name" onChange={this.setValue.bind(this, 'firstname')} value={this.state.firstname}/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text" floatingLabelText="Last Name" value={this.props.lastname}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text" floatingLabelText="Phone Number" value={this.props.phoneNumber}/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text" floatingLabelText="Email Address" value={this.props.email}/>
            </div>
          </div>

          <h3>Your Location</h3>

            <div className="row">
              <div className="col-md-5">
                <TextField type="text" floatingLabelText="City" value={this.props.city}/>
              </div>
              <div className="col-sm-offset-2 col-md-5">
                <TextField type="text" floatingLabelText="State"value={this.props.state}/>
              </div>
            </div>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Zip" value={this.props.zip}/>
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
              <MenuItem value={'painting'} primaryText="Painting" />
              <MenuItem value={'drawing'} primaryText="Drawing" />
              <MenuItem value={'sculpting'} primaryText="Sculpting" />
              <MenuItem value={'none'} primaryText="None" />
            </SelectField>
            <br></br>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Profile URL" value={this.props.profileURL}/>
                </div>
                <div className="col-sm-offset-2 col-md-5">
                  <TextField type="text" floatingLabelText="Personal Website" value={this.props.personalWebsite}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Bio" value={this.props.bio}/>
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
