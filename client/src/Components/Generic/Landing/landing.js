import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './landing.css';
import { Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import a from '../../Resources/Images/a.png';
import b from '../../Resources/Images/b.png';
import c from '../../Resources/Images/c.png';
import d from '../../Resources/Images/d.png';
import e from '../../Resources/Images/e.png';
import logo from '../../Resources/Images/logo.png';

class Landing extends Component {
  render() {
    return (
      <div className="Landing fade-in">
        <div className="welcome col-md-4 fade-in-slow">
          <h1>Get it done with a favor!</h1> 
          <NavLink to='/signup'>
            <button type='button' className="buttonMain"><h4>START NOW</h4></button>
          </NavLink>
        </div>
       	<div className="col-md-8 background">
       	 	
         </div>
         <div className="partner col-md-12">

            <Col className="col-md-2"><img src={a}/></Col>
            <Col className="col-md-2"><img src={b}/></Col>
            <Link to='//squaberry.com'><Col className="col-md-2"><img className="logoS" src={logo}/></Col></Link>
            <Col className="col-md-2"><img src={c}/></Col>
            <Col className="col-md-2"><img src={d}/></Col>
            <Col className="col-md-2"><img src={e}/></Col>
            
         </div>

         <div className="selfPraise col-md-12">

            <Col className="col-md-2 col-md-offset-1 praise">
              <h2>Hire for any scope<br/>
              of work:</h2>
            </Col>

            <Col className="col-md-2 praise center">
            <h2>Hire for any scope<br/>
            of work:</h2>
            </Col>

            <Col className="col-md-2 praise center">
            <h2>Hire for any scope<br/>
              of work:</h2>
            </Col>

            <Col className="col-md-2 praise center">
            <h2>Hire for any scope<br/>
              of work:</h2>
            </Col>

            <Col className="col-md-2 praise">
            <h2>Hire for any scope<br/>
              of work:</h2>
            </Col>
            
         </div>

      </div>
    );
  }
}
export default Landing;