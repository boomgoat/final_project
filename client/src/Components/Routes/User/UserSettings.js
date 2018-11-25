import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import Settings from '../../User/settings/settings';
import Footer from '../../Generic/Footer/footer';

class UserSettings extends Component {
  render() {
    return (
      <div className="Login">
      <Header></Header>
        <Settings/>
        <Footer/>
      </div>
    );
  }
}

export default UserSettings;