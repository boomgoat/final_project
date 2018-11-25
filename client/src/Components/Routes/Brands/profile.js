import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../Brand/Header/header';
import Profile from '../../Brand/Profile/brand';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BrandProfile extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <Profile/>
        <Footer/>
      </div>
    );
  }
}

export default BrandProfile;