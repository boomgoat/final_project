import React, { Component } from 'react';
import BrandLogin from '../../Brand/Login/login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../redux/brands/actions';


class BrandLog extends Component {


  submit = data => this.props.login(data).then(() => this.props.history.push("/brand"));

  render() {
    return (
      <div className="Login">
        <BrandLogin submit={this.submit}></BrandLogin>
      </div>
    );
  }
}

BrandLog.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect( null, { login } )(BrandLog);