import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.css';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/users/actions';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import pp from '../../Resources/Images/dingus.jpg';

class Profile extends Component {
  
	componentDidMount() {
		this.props.getUsers();
  }
  
  render() {
    const { firstName, about, skills, lastName, availability, reviews , favorPoints, rank , rating } = this.props.user.user
    return (
      <div className="container-fluid cont">
        <div className="container">

        {/*                           MAIN PROFILE HEADER                          */}
        
          <div className="jumbotron fade-in text-left prof col-md-9">
            <img src={pp} className="pp col-md-offset-5 col-md-2" alt="profile-picture"/>
            <h1 className="col-md-12 name text-center">{firstName + " " +lastName}</h1>
          </div>

          <div className="col-md-3 text-left">
          <NavLink to="/settings"><button className="settingsButn col-md-12"><h4>Profile Settings</h4></button></NavLink>
            <ul className="sidePanels">
              <li>
                <h3>Availability</h3>
                <br/>More than {availability} hrs/week
              </li>
            </ul>
          </div>

          {/*                           PROFILE HEADER END                           */}

           {/*                             ABOUT BLOCK                              */}

          <div className="jumbotron fade-in-slow text-left profCard col-md-9">
            
            <h2 className="col-md-12 profileHeading"><strong>About</strong></h2>

            <p className="about col-md-12">
              {about}
            </p> 
          </div>

          {/*                           ABOUT BLOCK END                            */}


          {/*                             SKILLS BLOCK                              */}

          <div className="jumbotron fade-in-slow text-left profCard col-md-9">

            <h2 className="col-md-12 profileHeading"><strong>Skills</strong></h2>

            <p className="skills col-md-12">
              {skills}
            </p>
          </div>

          {/*                           SKILLS BLOCK END                            */}

          {/*                             STATS BLOCK                              */}

          <div className="jumbotron fade-in-slow text-left profCard col-md-9">
            <Row>
              <h2 className=" profileHeading"><strong>Stats</strong></h2>
            </Row>
            
            <Row>
              <Col md={3}>
                <h3><strong>Favor Points:</strong></h3>
              </Col>
              <Col>
                <h3>{favorPoints}</h3>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <h3><strong>Rating:</strong></h3>
              </Col>
              <Col>
                <h3>{rating}</h3>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <h3><strong>Rank:</strong></h3>
              </Col>
              <Col>
                <h3>{rank}</h3>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <h3><strong>Reviews:</strong></h3>
              </Col>
              <Col>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                    aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est 
                    laborum.  
                    <hr/>                  
                </p>
              </Col>
            </Row>
          </div>

          {/*                           STATS BLOCK END                            */}
        
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