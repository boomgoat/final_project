import React, { Component } from 'react';
import Dashboard from '../../Admin/dashboard/dashboard';
import Footer from "../../Admin/Generic/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Landing from '../../Admin/Generic/landing';


class Admin extends Component {
  render() {
    return (
      <div className="Login">
        <Landing/>
      </div>
    );
  }
}

export default Admin;
