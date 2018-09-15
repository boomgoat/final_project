import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './cf.css';
import { Form, FormGroup } from 'reactstrap';

class ComForm extends Component {
  render() {
    return (
      <div className="ComForm container-fluid cont">
        <div className="jumbotron comform col-md-6 col-sm-6 col-xs-12" mdOffset={3}>
          <Form>
            <FormGroup>
              <h2 className="col-md-12 col-sm-12">Please provide the following details:</h2>
              <hr className="space"/>
              
              <h3>
                Age:
              </h3>
              <input 
                placeholder="Age - Use Numeric Characters" 
                className="in col-md-12 col-sm-12 col-xs-12 email"
              />

              <hr className="space"/>
              
              <h3>
                Contact:
              </h3>
              <input 
                placeholder="Enter contact number with area code" 
                className="in col-md-12 col-sm-12 col-xs-12 email"
              />

              <hr className="space"/>
              <h3>
                Gender:
              </h3>
              <label className="col-md-6 col-sm-6 col-xs-6">MALE</label>
              <label className="col-md-6 col-sm-6 col-xs-6">FEMALE</label>
              <input type= "radio"
                name="radio1"
                className="rad col-md-6 col-sm-6 col-xs-6 email"
              />
              <input type= "radio"
                name="radio1"
                className="rad col-md-6 col-sm-6 col-xs-6 email"
              />

              <NavLink to='/profile'>
                <button className="button col-md-12 col-sm-12 col-xs-12">SAVE!</button>
              </NavLink>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default ComForm;