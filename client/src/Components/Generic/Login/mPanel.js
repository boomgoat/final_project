import React, { Component } from 'react';
import styles from './login.css';
import { NavLink } from 'react-router-dom';

class MPanel extends Component {
  render() {
    return (
      <div className="MPanel">
        <div className="container-fluid cont">
          <div className="jumbotron login">
            <h2 className="col-md-12 col-sm-12">Log in and get to work</h2>
            <input placeholder="Username" className="col-md-12 col-sm-12 col-xs-12 uname"/>
            <input placeholder="Password" className="col-md-12 col-sm-12 col-xs-12 password"/>
            <NavLink to="/feed">
              <button className="button col-sm-12 col-xs-12">
                <h4>LOGIN</h4>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default MPanel;