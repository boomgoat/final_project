import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './signup.css';

class MainPanel extends Component {
  render() {
    return (
      <div className="MainPanel">
        <div className="container-fluid cont">
          <div className="jumbotron signup">
            <h2 className="col-md-12 col-sm-12">Sign Up</h2>
            <input placeholder="First Name" className="col-md-5 col-sm-5 col-xs-12 name" />
            <input placeholder="Last Name" className="col-md-5 col-sm-5 col-xs-12 col-md-offset-2 col-sm-offset-2 name" />
            <input placeholder="Email" className="col-md-12 col-sm-12 col-xs-12 email"/>
            <NavLink to='/newUser'>
            <button className="button col-md-12 col-sm-12 col-xs-12">SIGN UP</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPanel;