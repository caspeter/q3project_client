/* eslint-disable */
'use strict';
import React from 'react';
import request from 'superagent';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import Carousel from'react-bootstrap/lib/Carousel';

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
      console.log('hi');
      event.preventDefault();
      sessionStorage.setItem( 'username', this.state.username );
      this.props.history.push('./feed');
    //  console.log(sessionStorage.username);
    },

    handleClick: function(e) {
    console.log("click", e);
    },

    handleTouchTap: function(e) {
    console.log("touchTap", e);
    },

    handleLogoutSubmit(event){
      sessionStorage.removeItem('username', this.state.username );
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

    sessionStorage.getItem('username');
    const isLogged = (sessionStorage.username) ?
      <Nav /> : <Nav1 />

  return(
      <div>
      {isLogged}
      {login}
        <div className="postsContainer">
          <br />
          <div>
            Lorem ipsum dolor sit amet, senserit complectitur definitionem id his. Ea sit vivendum persequeris. Essent aeterno sit an, et vim dictas accusata philosophia, iudico impetus convenire ut mea. Ne noluisse lucilius sea, autem detracto conclusionemque nec an, posse antiopam at has. Te iudico discere tibique cum, quidam luptatum vim no, nec aeque nostrum cu. At nam aeterno senserit.
          </div>
          <br />
          <div>
            Idque iisque efficiendi in cum. Eos ad feugait efficiantur, sanctus nominavi argumentum eu pri. No scripta accusam philosophia quo, ne aeterno temporibus pri. Et ridens tritani moderatius sit, sanctus omnesque an pri, ea putant audire qui. Equidem partiendo no pri.
          </div>
          <br />
          </div>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="img/sketching.jpg"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="img/art-house-painting.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="img/art-house-sculpting.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
  );
  }
});

export default landingContainer;
