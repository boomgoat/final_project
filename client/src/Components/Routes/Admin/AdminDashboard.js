import React, { Component } from 'react';
import Dashboard from '../../Admin/dashboard/dashboard';
import Footer from "../../Admin/Generic/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class AdminDashboard extends Component {
  render() {
    return (
      <div className="Login">
        <Dashboard/>
      </div>
    );
  }
}

export default AdminDashboard;