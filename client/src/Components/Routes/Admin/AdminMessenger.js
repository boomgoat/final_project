import React, { Component } from 'react';
import Messenger from '../../Admin/Messenger/Messenger';
import Footer from "../../Admin/Generic/footer";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class AdminMessenger extends Component {
  render() {
    return (
      <div className="Login">
        <Messenger/>
      </div>
    );
  }
}

export default AdminMessenger;