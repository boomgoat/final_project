import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import ComForm from './User/newProfile/completionForm';
import Footer from './Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class newUser extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <ComForm/>
        <Footer/>
      </div>
    );
  }
}

export default newUser;