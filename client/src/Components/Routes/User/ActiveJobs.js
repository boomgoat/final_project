import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import ActiveDash from '../../Job/JobDashboard/activeJobs';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ActiveJobs extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <ActiveDash/>
        <Footer/>
      </div>
    );
  }
}

export default ActiveJobs;