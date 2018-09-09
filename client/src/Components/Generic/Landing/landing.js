import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">

        <NavLink to='/signup'>
          <div className="col-md-4">
            <button type='button' className="buttonMain"><h4>START NOW</h4></button>
          </div>
        </NavLink>
       	<div className="col-md-8 background">
       	 	<h1>Get it done with a favor!</h1> 
       	</div>

      </div>
    );
  }
}
export default Landing;