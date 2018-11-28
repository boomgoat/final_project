import React, { Component } from 'react';
import '../../../App.css';
import ManageBrand from '../../Admin/manageBrands/brand';
import SidePanel from '../../Admin/Generic/sidePanel';

class MBrand extends Component {
  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <ManageBrand/>
      </div>
    );
  }
}

export default MBrand;