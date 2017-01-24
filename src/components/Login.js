import React from 'react';

const LoginForm = React.createClass({
  render(){


    return(
      <div>
        <form onSubmit={this.props.handleLoginSubmit}>
          <label>Username: </label>
          <input type="text" id="username" value={this.props.username}></input>
          <label>Password: </label>
          <input type="text" id="password" value={this.props.password}></input>
          <button type="submit" value="Login" id="submit">Submit</button>
        </form>
      </div>
    );
  }
});

export default LoginForm;
