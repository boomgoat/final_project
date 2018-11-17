import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import Subheader from "./Generic/Header/subHeader";
import HowItWorks from "./Generic/HowItWorks/how";
import Footer from "./Generic/Footer/footer";


class How extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <Subheader />
        <HowItWorks/>
        <Footer/>
      </div>
    );
  }
}

export default How;