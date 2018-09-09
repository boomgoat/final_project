import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './cf.css';

class ComForm extends Component {
  render() {
    return (
      <div className="ComForm container-fluid cont">
        <div className="jumbotron comform">
            <h2 className="col-md-12 col-sm-12">Please provide the following details:</h2>
            <input placeholder="Email" className="col-md-12 col-sm-12 col-xs-12 email"/>
            <NavLink to='/profile'>
            <button className="button col-md-12 col-sm-12 col-xs-12">SAVE!</button>
            </NavLink>
        </div>
      </div>
    );
  }
}
export default ComForm;