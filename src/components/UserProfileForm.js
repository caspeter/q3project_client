import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const ProfileForm = React.createClass({
  render(){

    return(
      <div>
        <form onSubmit={this.props.handleProfileChange}>
          <h3>Contact Information</h3>
            <label>First Name: </label>
            <input type="text" placeholder="firstname" value={this.props.firstname}
             id="firstname"/>
            <label>Last Name: </label>
            <input type="text" placeholder="lastname" value={this.props.lastname}/>
            <label> Phone Number: </label>
            <input type="text" placeholder="888-888-8888"></input>
            <label>Email Address: </label>
            <input type="text" placeholder="email@email.com"></input>
          <h3>Your Location</h3>
            <label>City: </label>
            <input type="text" placeholder="City Name"></input>
            <label>State: </label>
            <input type="text" placeholder="CO"></input>
            <label>Zip Code: </label>
            <input type="text" placeholder="88888"></input>
          <h3>About</h3>
            <label>Skill:</label>
            <DropDownMenu>
              <MenuItem value={this.props.skill} primaryText="Artist" />
              <MenuItem value={1} primaryText="Painter" />
              <MenuItem value={1} primaryText="Architect" />
              <MenuItem value={1} primaryText="None" />
            </DropDownMenu>
        </form>
      </div>
    );
  }
});

export default ProfileForm;
