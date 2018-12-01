import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './feed.css';
import JobListing from '../Listing/jobListing';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/users/actions';
import PropTypes from 'prop-types';
import pp from '../../Resources/Images/dingus.jpg';

class Feed extends Component {

  componentDidMount() {
		this.props.getUsers();
  }

  render() {
    const { firstName, about, skills, lastName, availability } = this.props.user.user
    return (
      <div className="container-fluid cont">
        <div className="container">
          <div className="col-md-2 hidden-sm hidden-xs text-right">
            <ul className="sidePanels">
              <li><h4>Job Feed</h4></li>
              <li><h4>Service Feed</h4></li>
              <li><h4>Active Jobs</h4></li>
              <li><h4>Completed Jobs</h4></li>
            </ul>
          </div>
          <JobListing/>
          <div className="col-md-2 hidden-sm hidden-xs text-left">
            <ul className="sidePanels">
            
              <li><img src={pp} className="pp col-md-9 feedPic" alt="profile-picture"/></li>
              <li><h2 className="links">Rank:</h2><h4>Archangel</h4> </li>
              <li><h2 className="links">Points:</h2><h4>3466</h4></li>
              <li><h4 className="links">Availability:</h4><h4>{availability} hrs/week</h4></li>
              <hr className="sidepanelSplit"/>
              <NavLink to="/profile"><li className="profLink"><h4>View Profile</h4></li></NavLink>
              <NavLink to="/newService"><li className="links"><h4>Create Service</h4></li></NavLink>
              <NavLink to="/myServices"><li className="links"><h4>My Services</h4></li></NavLink>
              
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

Feed.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUsers })(Feed);