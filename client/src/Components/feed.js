import React, { Component } from 'react';
import '../App.css';
import Header from './User/Header/header';
import MobileMenu from './User/MobileMenu/mobileMenu';
import Feed from './User/feed/feed';
import Footer from './Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class feed extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <Feed/>
        <Footer/>
      </div>
    );
  }
}

export default feed;