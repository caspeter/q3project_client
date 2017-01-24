import React from 'react';

const LoginForm = React.createClass({
  render(){
    const message = 'hello'

    return(
      <div>
        {message}
        <form>
          <input type="text" id="username"></input>
          <input type="text" id="password"></input>
          <button type="submit" value="submit" id="submit"></button>
        </form>
      </div>
    );
  }
});

export default LoginForm;
