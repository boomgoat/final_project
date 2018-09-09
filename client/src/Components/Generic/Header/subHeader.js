import React, { Component } from 'react';

class Subheader extends Component {
  render() {
    return (
      <div className="Subheader hidden-xs">
        <ul className="navList">
          <li>Developers</li>
          <li>Designers</li>
          <li>Mechanics</li>
          <li>Misc.</li>
          <li>Admin Support</li>
        </ul>
      </div>
    );
  }
}
export default Subheader;