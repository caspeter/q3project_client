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

          </div>
          <br />
          <div>
            Idque iisque efficiendi in cum. Eos ad feugait efficiantur, sanctus nominavi argumentum eu pri. No scripta accusam philosophia quo, ne aeterno temporibus pri. Et ridens tritani moderatius sit, sanctus omnesque an pri, ea putant audire qui. Equidem partiendo no pri.
          </div>
          <br />
          </div>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="img/sketching-crop.jpg"/>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader">ArtOps</h1>
                <h2 className="primaryLandingCarouselParagraph">Connecting local Artists with Customers who <i>NEED</i> their products.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="img/art-house-painting-crop.jpg"/>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader">Local Artists</h1>
                <h2 className="secondaryLandingCarouselParagraph">ArtOps allows Local Artists to post information about the kind of work that they create so that other Artists and <br></br>Customers can find them.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="img/art-house-sculpting-crop.jpg"/>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader">Art Dilettante</h1>
                <h2 className="secondaryLandingCarouselParagraph">Customers can search through ArtOps posts to <br></br>find Local Artist, or make thier own posts to <br></br>connect them with Artists who can make <br></br>their project dreams become reality.</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
  );
  }
});

export default landingContainer;
