import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.css';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/users/actions';
import PropTypes from 'prop-types';
import pp from '../../Resources/Images/dingus.jpg';

class Profile extends Component {
  
	componentDidMount() {
		this.props.getUsers();
  }
  
  render() {
    const { firstName, about } = this.props.user.user
    return (
      <div className="container-fluid cont">
        <div className="container">
        
          <div className="jumbotron text-left prof col-md-9">
            <img src={pp} className="pp col-md-2" alt="profile-picture"/>
            <h2 className="col-md-7 name">Welcome Back {firstName}</h2>
            <p className="about">
              {about}
            </p> 
          </div>
          <div className="col-md-3 text-left">
          <button className="settingsButn col-md-12"><h4>Profile Settings</h4></button>
            <ul className="sidePanels">
              <li>
                <h3>Availability</h3>
                <br/>More than 30 hrs/week
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUsers })(Profile);