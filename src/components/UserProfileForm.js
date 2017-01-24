import React from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


const ProfileForm = React.createClass({

  getInitialState(){
    return ({
      value: ''
    });
  },

  //handleChange = (event, index, value) => this.setState({value}),

  render: function(){

    console.log(this.state);
    return(
      <div>
        <form>
          <h3>Contact Information</h3>
            <label>First Name: </label>
            <input type="text" placeholder="firstname"
             id="firstname"/>
            <label>Last Name: </label>
            <input type="text" placeholder="lastname"/>
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
            <SelectField
            floatingLabelText="Frequency"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>

            <label>Profile URL:</label>
            <input type="text"></input>
            <label>Website Link:</label>
            <input type="text"></input>
            <label>BIO:</label>
            <input type="text"></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
});

export default ProfileForm;
