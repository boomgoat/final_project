import React, { Component } from 'react';
import '../../../App.css';
import PointStatus from '../../Admin/pointStatus/pointStatus';
import SidePanel from '../../Admin/Generic/sidePanel';

class FPStatus extends Component {
  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <PointStatus/>
      </div>
    );
  }
}

export default FPStatus;