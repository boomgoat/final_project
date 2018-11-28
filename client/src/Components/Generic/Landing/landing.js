import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './landing.css';

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

      </div>
    );
  }
}
export default Landing;