import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import JobDash from '../../Job/JobDashboard/jobDashboard';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class JobDashboard extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <JobDash/>
        <Footer/>
      </div>
    );
  }
}

export default JobDashboard;