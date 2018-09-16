import React, { Component } from 'react';
import '../App.css';
import Header from './Generic/Header/header';
import MainPanel from './Generic/Signup/mainPanel'
import Footer from "./Generic/Footer/footer";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../redux/users/actions';

class Signup extends Component {

  submit = data => 
    this.props.signup(data).then(() => this.props.history.push("/newUser"));

  render() {
    return (
      <div className="Signup">
        <Header />
        <MainPanel submit={this.submit}/>
        <Footer/>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
}

export default connect(null, {signup} )(Signup);
