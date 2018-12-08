import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './feed.css';
import JobListing from '../Listing/jobListing';
import BrandListing from '../Listing/brandListing';
import ServiceListing from '../Listing/serviceListing';
import {connect} from 'react-redux';
import {getUsers} from '../../../redux/users/actions';
import PropTypes from 'prop-types';
import pp from '../../Resources/Images/dingus.jpg';

class Feed extends Component {

  constructor() {
    super();
    this.state = {
      currentComponent: 'compA'
    };
    this.service = this.service.bind(this);
    this.brand = this.brand.bind(this);
    this.job = this.job.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  job() {
    this.setState({
      currentComponent: 'compA'
    });
  }

  service() {
    this.setState({
      currentComponent: 'compB'
    });
  }

  brand() {
    this.setState({
      currentComponent: 'compC'
    });
  }

  setCurrentComponent = (event) => {
    event.preventDefault();
    const { id } = event.target;
    this.setState({currentComponent: id});
  };


  getComponent(componentName) {
    console.log(componentName);
    switch (componentName) {
      case 'compA' :
        return <JobListing/>;
        break;
      case 'compB' :
        return <ServiceListing/>;
        break;
      case 'compC' :
        return <BrandListing/>;
        break;
      default:
        return <JobListing/>;
        break;
    }
  }

  render() {

    const {firstName, about, skills, lastName, availability} = this.props.user.user;
    const { currentComponent } = this.state;
    return (
      <div className="container-fluid cont">
        <div className="container">
          <div className="col-md-2 hidden-sm hidden-xs text-justify">
            <ul className="sidePanels">
              <li onClick={this.setCurrentComponent}><h4 id={'compC'} className="brandAnchor">Brand Feed</h4></li>
              <li onClick={this.setCurrentComponent}><h4 id={'compA'}>Job Feed</h4></li>
              <li onClick={this.setCurrentComponent}><h4 id={'compB'}>Service Feed</h4></li>
              <NavLink to="/activeJobs">
                <li><h4>Active Jobs</h4></li>
              </NavLink>
              <NavLink to="/activeServices">
                <li><h4>Active Services</h4></li>
              </NavLink>
              <NavLink to="/completedJobs">
                <li><h4>Completed Jobs</h4></li>
              </NavLink>
              <NavLink to="/completedServices">
                <li><h4>Completed Services</h4></li>
              </NavLink>
            </ul>
          </div>
          {this.getComponent(currentComponent)}
          <div className="col-md-2 hidden-sm hidden-xs text-justify">
            <ul className="sidePanels">

              <li><img src={pp} className="pp col-md-9 feedPic" alt="profile-picture"/></li>
              <li><h2 className="links">Rank:</h2><h4>Archangel</h4></li>
              <li><h2 className="links">Points:</h2><h4>3466</h4></li>
              <li><h4 className="links">Availability:</h4><h4>{availability} hrs/week</h4></li>
              <hr className="sidepanelSplit"/>
              <NavLink to="/profile">
                <li className="profLink"><h4>View Profile</h4></li>
              </NavLink>
              <NavLink to="/newService">
                <li className="links"><h4>Create Service</h4></li>
              </NavLink>
              <NavLink to="/myServices">
                <li className="links"><h4>My Services</h4></li>
              </NavLink>

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

export default connect(mapStateToProps, {getUsers})(Feed);