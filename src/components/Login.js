import React from 'react';

const LoginForm = React.createClass({
  render(){

    console.log(this.props)
    return(
      <div>
      <form onSubmit={this.props.handleLoginSubmit}>
        <label>Username: </label>
        <input type="text" placeholder="username" value={this.props.username}
          onChange={this.props.handleUsername} id="username"/>
        <label>Password: </label>
        <input type="text" placeholder="password" value={this.props.password} onChange={this.props.handlePassword}/>
        <input type="submit" value="Login" id="submit"/>
      </form>
    </div>
    );
  }
});

export default LoginForm;
