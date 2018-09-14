import React, { Component } from 'react';
import styles from './login.css';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup } from 'reactstrap';
// import Validator from 'validator';
import InlineError from '../Utilities/InlineError';

class MPanel extends Component {

  state = {
    data: {
      username: '',
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
  };

  validate = (data) => {
    const errors = {};
    if (!data.pass) errors.pass = "Can't be blank";
    if (!data.username) errors.username = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="MPanel">
        <div className="container-fluid cont">
          <div className="jumbotron login">
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <h2 className="col-md-12 col-sm-12">Log in and get to work</h2>
                <input 
                  placeholder="Username" 
                  value={data.username} 
                  name="username" 
                  className="col-md-12 col-sm-12 col-xs-12 uname"
                  onChange= { this.onChange }
                />

                {errors.username && <InlineError text={errors.username} />}
                
                <input 
                  placeholder="Password" 
                  value={data.pass} 
                  name="pass" 
                  className="col-md-12 col-sm-12 col-xs-12 password"
                />

                {errors.pass && <InlineError text={errors.pass} />}

                
                <button type="submit" className="button col-sm-12 col-xs-12">
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
export default MPanel;