import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import Subheader from "./Generic/Header/subHeader";
import Landing from "./Generic/Landing/landing";
import MobleMenu from './Generic/MobileMenu/mobileMenu';
import Footer from "./Generic/Footer/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MobleMenu></MobleMenu>
        <Header />
        <Subheader />
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
