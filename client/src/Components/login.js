import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import MPanel from './Generic/Login/mPanel'
import Footer from "./Generic/Footer/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <MPanel/>
        <Footer/>
      </div>
    );
  }
}

export default Login;