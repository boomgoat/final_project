import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './subHeader.css';


class Subheader extends Component {
  render() {
    return (
      <div className="Subheader hidden-sm hidden-xs">
        <ul className="navList col-md-12 col-sm-12">
          <NavLink to="/brandLogin"><li className="col-md-2 col-sm-offset-1 col-sm-2"><h5>Brand Login</h5></li></NavLink>
          <NavLink to="#"><li className="col-md-2 col-sm-2"><h5>About</h5></li></NavLink>
          <NavLink to="#"><li className="col-md-2 col-sm-2"><h5>About</h5></li></NavLink>
          <NavLink to="#"><li className="col-md-2 col-sm-2"><h5>Favor Coin</h5></li></NavLink>
          <NavLink to="#"><li className="col-md-2 col-sm-2"><h5>FAQ's</h5></li></NavLink>
        </ul>
      </div>
    );
  }
}
export default Subheader;