import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import MainPanel from './Generic/Signup/mainPanel'
import Footer from "./Generic/Footer/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Header />
        <MainPanel/>
        <Footer/>
      </div>
    );
  }
}

export default Signup;
