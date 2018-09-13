import React, { Component } from 'react';
import styles from './subHeader.css';

class Subheader extends Component {
  render() {
    return (
      <div className="Subheader hidden-xs">
        <ul className="navList col-md-12 col-sm-12">
          <li className="col-md-2 col-sm-offset-1 col-sm-2">Developers</li>
          <li className="col-md-2 col-sm-2">Designers</li>
          <li className="col-md-2 col-sm-2">Mechanics</li>
          <li className="col-md-2 col-sm-2">Misc.</li>
          <li className="col-md-2 col-sm-2">Admin Support</li>
        </ul>
      </div>
    );
  }
}
export default Subheader;