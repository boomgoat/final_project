import React, { Component } from 'react';
import '../../../App.css';
import JobReview from '../../Admin/JobReview/jobreview';
import SidePanel from '../../Admin/Generic/sidePanel';

class JobRev extends Component {
  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <JobReview/>
      </div>
    );
  }
}

export default JobRev;