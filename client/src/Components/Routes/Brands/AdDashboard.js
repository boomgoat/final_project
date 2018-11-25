import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../Brand/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import AdDash from '../../Brand/Dashboard/AdDashboard';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class AdDashboard extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <AdDash/>
        <Footer/>
      </div>
    );
  }
}

export default AdDashboard;