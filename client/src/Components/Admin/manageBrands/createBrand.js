import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './brand.css';
import InlineError from '../../Generic/Utilities/InlineError';
import PropTypes from 'prop-types';
import {Form, FormGroup} from 'reactstrap';

class CreateBrand extends Component {
  state = {
    data: {
      brandName: '',
      email:'',
      password:'',
      phone:''
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
    if (!data.brandName) errors.brandName = "Can't be blank";
    if (!data.phone) errors.phone = "Can't be blank";
    if (!data.email) errors.email = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
        <div className="container-fluid">
          <div className="jumbotron fade-in signup">
            <Form onSubmit={this.onSubmit}>
            {errors.global && (
              <div className="alert alert-warning">Oops! Something went wrong!<br/>
                {errors.global}
              </div>
            )}
              <h2 className="col-md-12 col-sm-12">Sign Up</h2>
              
              <FormGroup>
                  <input type="text" 
                    value={data.brandName}
                    onChange={this.onChange}
                    placeholder="Brand Name" 
                    className="col-md-5 col-sm-5 col-xs-12"
                    name="brandName" 
                  />

                  {errors.brandName && <InlineError text={errors.brandName} />}

                  <input type="text"
                      placeholder="Phone"
                      value={data.phone}
                      onChange={this.onChange}
                      className="col-md-5 col-sm-5 col-xs-12 col-sm-offset-2"
                      name="phone" 
                  />

                  {errors.phone && <InlineError text={errors.phone} />}


                  
                  <input placeholder="Email" 
                  value={data.email}
                      type="email"
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="email"
                  />

                  {errors.email && <InlineError text={errors.email} />}

                  
                  <input placeholder="Password"
                    type="password" 
                      value={data.password}
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="password"
                  />

                  {errors.password && <InlineError text={errors.password} />}

                  
                 
                  <button type="submit" className="newBrand col-md-12 col-sm-12 col-xs-12"><h2>Create Brand</h2></button>
                  
              </FormGroup>

            </Form>
          </div>
        </div>
    );
  }
}

CreateBrand.propTypes = {
  submit: PropTypes.func.isRequired
}

export default CreateBrand;