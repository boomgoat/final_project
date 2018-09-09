import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import Profile from './User/profile/profile';
import Footer from './Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class uProfile extends Component {
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

export default uProfile;