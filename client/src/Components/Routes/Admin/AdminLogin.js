import React, { Component } from 'react';
import AdmLogin from '../../Admin/Generic/login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../redux/admin/actions';


class AdminLog extends Component {


  submit = data => this.props.login(data).then(() => this.props.history.push("/admin"));

  render() {
    return (
      <div className="Login">
        <AdmLogin submit={this.submit}></AdmLogin>
      </div>
    );
  }
}

AdminLog.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect( null, { login } )(AdminLog);