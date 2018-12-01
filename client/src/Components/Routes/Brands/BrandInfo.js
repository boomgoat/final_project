import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../Brand/Header/header';
import BrandCard from '../../Brand/BrandCard/brandCard';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BrandInfo extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <BrandCard/>
        <Footer/>
      </div>
    );
  }
}

export default BrandInfo;