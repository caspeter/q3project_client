/* eslint-disable */
'use strict';
import React from 'react';
import request from 'superagent';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();


var landingContainer = React.createClass({

    getInitialState(){
      return ({
        username: '',
        password: ''
      });
    },

    componentDidMount(){
      console.log(this.state);
    },

    handleUsername(event){
      console.log('username change')
      this.setState({username:event.target.value})
    },
    handlePassword(event){
      this.setState({password:event.target.value})
    },


    handleLoginSubmit(event){
      event.preventDefault();
      sessionStorage.setItem('username', this.state.username );
      browserHistory.push('/feed');
    },

    handleLogoutSubmit(event){
      sessionStorage.removeItem('username', this.state.username );
      browserHistory.push('/');
    },

    render: function(){
      var login = (true) ?
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          handleLoginSubmit={this.handleLoginSubmit}
        /> : null;


      const isLogged = (sessionStorage.username) ?
        <Nav /> : <Nav1 />

      return(
        <div>
          <div className="postsContainer">
            {isLogged}
            {login}
            <br />
            <div>
              Lorem ipsum dolor sit amet, senserit complectitur definitionem id his. Ea sit vivendum persequeris. Essent aeterno sit an, et vim dictas accusata philosophia, iudico impetus convenire ut mea. Ne noluisse lucilius sea, autem detracto conclusionemque nec an, posse antiopam at has. Te iudico discere tibique cum, quidam luptatum vim no, nec aeque nostrum cu. At nam aeterno senserit.
            </div>
            <br />
            <div>
              Idque iisque efficiendi in cum. Eos ad feugait efficiantur, sanctus nominavi argumentum eu pri. No scripta accusam philosophia quo, ne aeterno temporibus pri. Et ridens tritani moderatius sit, sanctus omnesque an pri, ea putant audire qui. Equidem partiendo no pri.
            </div>
            <br />
            <img src="img/sketching.jpg" />
          </div>
        </div>
      );
    }
});

export default landingContainer;
