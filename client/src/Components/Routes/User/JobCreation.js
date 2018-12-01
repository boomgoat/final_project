import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import CreateJob from '../../Job/CreateJob/createJob';
import Footer from '../../Generic/Footer/footer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createJob } from '../../../redux/jobs/actions';

class JobCreation extends Component {

  submit = data => 
    this.props.createJob(data).then(() => this.props.history.push("/feed"));

  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <CreateJob submit={this.submit}/>
        <Footer/>
      </div>
    );
  }
}

JobCreation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  createJob: PropTypes.func.isRequired
}

export default connect(null, {createJob} )(JobCreation);