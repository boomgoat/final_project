import React, { Component } from 'react';
import '../../../App.css';
import SerReview from '../../Admin/JobReview/ServiceReview';
import SidePanel from '../../Admin/Generic/sidePanel';

class SerRev extends Component {
  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <SerReview/>
      </div>
    );
  }
}

export default SerRev;