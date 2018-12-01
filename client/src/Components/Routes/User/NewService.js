import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import NewService from '../../Services/NewService/newService';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createService } from '../../../redux/jobs/actions';

class NewServ extends Component {

  submit = data => 
  this.props.createService(data).then(() => this.props.history.push("/feed"));

  render() {
    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
        <NewService submit={this.submit}/>
        <Footer/>
      </div>
    );
  }
}


NewServ.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  createService: PropTypes.func.isRequired
}

export default connect(null, {createService} )(NewServ);