/* eslint-disable */
'use strict';
import React from 'react';
import request from 'superagent';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Carousel from 'react-bootstrap/lib/Carousel';


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

    handleLogoutSubmit(event){
      //alert('hi');
      event.preventDefault();
      sessionStorage.removeItem('id');
      browserHistory.push('/');
    },

    handleLoginSubmit(event){
      event.preventDefault();
      request
      .get('http://localhost:5000/api/users/username/' + this.state.username)
        .end(function(err, res){
          if(err){
            console.log('error getting username', err);
          }
          else{
          console.log(res)
          sessionStorage.setItem('id', res.body.id);
          browserHistory.push('/feed');

          }
      });
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



      const isLogged = (sessionStorage.id) ?
        <Nav
          handleLogoutSubmit={this.handleLogoutSubmit} />
          :
        <Nav1
          handleLoginSubmit={this.handleLoginSubmit}/>



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
