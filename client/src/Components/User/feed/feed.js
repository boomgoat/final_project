import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './feed.css';
import JobListing from '../Listing/jobListing';

class Feed extends Component {

  render() {
    return (
      <div className="container-fluid cont">
        <div className="container">
          <div className="col-md-2 hidden-sm hidden-xs text-right">
            <ul className="sidePanels">
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
            </ul>
          </div>
          <JobListing/>
          <div className="col-md-2 hidden-sm hidden-xs text-left">
            <ul className="sidePanels">
              <NavLink to="/profile"><li><h4>My Profile</h4></li></NavLink>
              <NavLink to="/newService"><li><h4>Create Service</h4></li></NavLink>
              <NavLink to="/myServices"><li><h4>My Services</h4></li></NavLink>
              <li><h4>Action</h4></li>
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Feed;