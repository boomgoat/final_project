import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './signup.css';
import InlineError from '../Utilities/InlineError';
import PropTypes from 'prop-types';
import {Form, FormGroup} from 'reactstrap';

class MainPanel extends Component {
  state = {
    data: {
      username: '',
      email:'',
      password:'',
      fname:'',
      lname:''
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
    if (!data.fname) errors.fname = "Can't be blank";
    if (!data.lname) errors.lname = "Can't be blank";
    if (!data.username) errors.userName = "Can't be blank";
    if (!data.email) errors.email = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="MainPanel">
        <div className="container-fluid cont">
          <div className="jumbotron signup">
            <Form onSubmit={this.onSubmit}>
            {errors.global && (
              <div className="alert alert-warning">Oops! Something went wrong!<br/>
                {errors.global}
              </div>
            )}
              <h2 className="col-md-12 col-sm-12">Sign Up</h2>
              
              <FormGroup>
                  <input type="text" 
                    value={data.fname}
                    onChange={this.onChange}
                    placeholder="First Name" 
                    className="col-md-5 col-sm-5 col-xs-12"
                    name="fname" 
                  />

                  {errors.fname && <InlineError text={errors.fname} />}

                  <input type="text"
                      placeholder="Last Name"
                      value={data.lname}
                      onChange={this.onChange}
                      className="col-md-5 col-sm-5 col-xs-12 col-sm-offset-2"
                      name="lname" 
                  />

                  {errors.lname && <InlineError text={errors.lname} />}

                  
                  <input placeholder="User Name" 
                  value={data.username}
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="username"
                  />

                  {errors.username && <InlineError text={errors.username} />}

                  
                  <input placeholder="Email" 
                  value={data.email}
                      type="email"
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="email"
                  />

                  {errors.email && <InlineError text={errors.email} />}

                  
                  <input placeholder="Password" 
                      value={data.password}
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="password"
                  />

                  {errors.password && <InlineError text={errors.password} />}

                  
                 
                  <button type="submit" className="button col-md-12 col-sm-12 col-xs-12">SIGN UP</button>
                  
              </FormGroup>

            </Form>
          </div>
        </div>
      </div>
    );
  }
}

MainPanel.propTypes = {
  submit: PropTypes.func.isRequired
}

export default MainPanel;