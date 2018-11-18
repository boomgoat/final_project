import React, { Component } from 'react';
import styles from './generic.css';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup } from 'reactstrap';
// import Validator from 'validator';
import InlineError from '../../Generic/Utilities/InlineError';
import PropTypes from 'prop-types';

class AdmLogin extends Component {

  state = {
    data: {
      email: '',
      pass: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = (e) =>{
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0){
      this.props.submit(this.state.data)
      .catch(err => this.setState({ errors: err.response.data.errors }));
    }
  };

  validate = (data) => {
    const errors = {};
    if (!data.email) errors.userName = "Can't be blank";
    if (!data.pass) errors.pass = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="MPanel">
        <div className="container-fluid cont">
          <div className="jumbotron login">
            <Form onSubmit={this.onSubmit}>
            {errors.global && (
              <div className="alert alert-warning">Oops! Something went wrong!<br/>
                {errors.global}
              </div>
            )}
              <FormGroup>
                <h2 className="col-md-12 col-sm-12">Log in and get to work</h2>
                <input 
                  placeholder="Email" 
                  value={data.email} 
                  name="email" 
                  className="col-md-12 col-sm-12 col-xs-12 uname"
                  onChange= { this.onChange }
                />

                {errors.userName && <InlineError text={errors.userName} />}
                
                <input 
                  placeholder="Password" 
                  value={data.pass} 
                  name="pass" 
                  type="password"
                  className="col-md-12 col-sm-12 col-xs-12 password"
                  onChange= { this.onChange }
                />

                {errors.pass && <InlineError text={errors.pass} />}

                
                <button type="submit" className="Adminbutton col-sm-12 col-xs-12">
                  <h4>LOGIN</h4>
                </button>
                
                </FormGroup>
              </Form>
          </div>
        </div>
      </div>
    );
  }
}


AdmLogin.propTypes = {
  submit: PropTypes.func.isRequired
}


export default AdmLogin;