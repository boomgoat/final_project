import React, { Component } from 'react';
import '../App.css';
import Header from './User/Header/header';
import MobileMenu from './User/MobileMenu/mobileMenu';
import NewService from './Services/NewService/newService';
import Footer from './Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NewServ extends Component {
  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <NewService/>
        <Footer/>
      </div>
    );
  }
}

export default NewServ;