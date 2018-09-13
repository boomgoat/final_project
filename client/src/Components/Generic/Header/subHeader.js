import React, { Component } from 'react';
import styles from './subHeader.css';

class Subheader extends Component {
  render() {
    return (
      <div className="Subheader hidden-xs">
        <ul className="navList col-md-12 col-sm-12">
          <li className="col-md-2 col-sm-offset-1 col-sm-2"><h5>Developers</h5></li>
          <li className="col-md-2 col-sm-2"><h5>Designers</h5></li>
          <li className="col-md-2 col-sm-2"><h5>Mechanics</h5></li>
          <li className="col-md-2 col-sm-2"><h5>Misc.</h5></li>
          <li className="col-md-2 col-sm-2"><h5>Admin Support</h5></li>
        </ul>
      </div>
    );
  }
}
export default Subheader;