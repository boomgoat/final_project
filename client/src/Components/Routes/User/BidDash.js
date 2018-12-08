import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import MyBids from '../../User/Bids/myBids';
import Footer from '../../Generic/Footer/footer';

class BidDash extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <MyBids/>
        <Footer/>
      </div>
    );
  }
}

export default BidDash;