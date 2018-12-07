import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../Brand/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import Footer from '../../Generic/Footer/footer';
import CreateJob from '../../Brand/BrandJobs/brandJob';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createJob } from '../../../redux/jobs/actions';

class BrandJob extends Component {

  submit = data => 
    this.props.createJob(data).then(() => this.props.history.push("/brand"));

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

BrandJob.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  createJob: PropTypes.func.isRequired
}

export default connect(null, {createJob} )(BrandJob);