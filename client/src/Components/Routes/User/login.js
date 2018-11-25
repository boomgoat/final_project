import React, { Component } from 'react';
import '../../../App.css';
import Header from '../../Generic/Header/header';
import MPanel from '../../Generic/Login/mPanel'
import Footer from "../../Generic/Footer/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../redux/users/actions';

class Login extends Component {

  submit = data => this.props.login(data).then(() => this.props.history.push("/feed"));

  render() {
    return (
      <div className="Login">
        <Header />
        <MPanel submit={this.submit}/>
        <Footer/>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect( null, { login } )(Login);