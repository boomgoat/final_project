import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import CompDash from '../../Job/JobDashboard/completedJobs';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CompJobs extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <CompDash/>
        <Footer/>
      </div>
    );
  }
}

export default CompJobs;