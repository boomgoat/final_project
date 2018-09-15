import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './feed.css';
import JobListing from '../Listing/jobListing';

class Feed extends Component {
  render() {
    return (
      <div className="container-fluid cont">
        <div className="container">
          <div className="col-md-2 text-left">
            <ul className="sidePanels">
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
            </ul>
          </div>
          <JobListing/>
          <div className="col-md-2 text-left">
            <ul className="sidePanels">
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <NavLink to="/profile"><li><h4>View Profile</h4></li></NavLink>
              <li><h4>Action</h4></li> 
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Feed;