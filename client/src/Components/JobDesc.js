import React, { Component } from 'react';
import '../App.css';
import Header from './User/Header/header';
import Job from './User/Job/job';
import Footer from './Generic/Footer/footer';

class JobDesc extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <Job/>
        <Footer/>
      </div>
    );
  }
}

export default JobDesc;