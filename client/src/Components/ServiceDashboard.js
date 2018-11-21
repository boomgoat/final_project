import React, { Component } from 'react';
import '../App.css';
import Header from './User/Header/header';
import MobileMenu from './User/MobileMenu/mobileMenu';
import ServDash from './Services/Dashboard/serviceDashboard';
import Footer from './Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ServiceDashboard extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <ServDash/>
        <Footer/>
      </div>
    );
  }
}

export default ServiceDashboard;