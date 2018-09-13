import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid cont">
        <div className="container">
          <div className="jumbotron prof col-md-9"></div>
          <div className="col-md-3 text-left">
          <button className="settingsButn col-md-12"><h4>Profile Settings</h4></button>
            <ul className="sidePanels">
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;