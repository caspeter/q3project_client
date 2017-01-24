import React from 'react';

const ProfileForm = React.createClass({
  render(){

    return(
      <div>
        <form onSubmit={this.props.handleProfileSubmit}>
          <label> First Name </label>
          <input type="text" placeholder="firstname" id="firstname" value={this.props.firstname}></input>

        </form>
      </div>
    )
  }
});

export default ProfileForm;
