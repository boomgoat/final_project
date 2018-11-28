import React, { Component } from 'react';
import '../../../App.css';
import ManageUser from '../../Admin/manageUsers/User';
import SidePanel from '../../Admin/Generic/sidePanel';

class MUser extends Component {
  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <ManageUser/>
      </div>
    );
  }
}

export default MUser;