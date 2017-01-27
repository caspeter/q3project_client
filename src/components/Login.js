/* eslint-disable */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: "#90C15B",
  },
  underlineStyle: {
    borderColor: "#90C15B",
  },
  floatingLabelStyle: {
    color: "#90C15B",
  },
  floatingLabelFocusStyle: {
    color: "#90C15B",
  },
};

const LoginForm = React.createClass({
  render(){

    return(

      <div className="row center">
        <form onSubmit={this.props.handleLoginSubmit}>
          {/* <RaisedButton label="Username" /> */}
          {/* <div className="col-l-6"> */}
          <TextField
            floatingLabelText="Username"
            type="text"
            value={this.props.username}
            onChange={this.props.handleUsername}
            id="username"
            className="marginRight"
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          {/* </div> */}
          {/* <div className="col-l-6"> */}
          <TextField
            floatingLabelText="Password"
            type="password"
            value={this.props.password}
            onChange={this.props.handlePassword}
            className="marginRight"
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          {/* </div> */}
          <RaisedButton label="Log in"
            type="submit"
            value="Login"
            id="submit"
            backgroundColor="#90C15B"
          />
          {/* <input type="submit" value="Login" id="submit"/> */}
        </form>
      </div>

    );
  }
});

export default LoginForm;
