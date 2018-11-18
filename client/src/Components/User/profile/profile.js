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
    const { firstName, about, skills, lastName } = this.props.user.user
    return (
      <div className="container-fluid cont">
        <div className="container">
        
          <div className="jumbotron text-left prof col-md-9">
            <img src={pp} className="pp col-md-offset-5 col-md-2" alt="profile-picture"/>
            <h1 className="col-md-12 name text-center">{firstName + " " +lastName}</h1>
            
            <h2 className="col-md-12 profileHeading">About</h2>

            <p className="about col-md-12">
              {about}
            </p> 

            <h2 className="col-md-12 profileHeading">Skills</h2>

            <p className="skills col-md-12">
              {skills}
            </p>
          </div>
          <div className="col-md-3 text-left">
          <NavLink to="/settings"><button className="settingsButn col-md-12"><h4>Profile Settings</h4></button></NavLink>
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