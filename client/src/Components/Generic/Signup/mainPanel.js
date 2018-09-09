import React, { Component } from 'react';

class MainPanel extends Component {
  render() {
    return (
      <div className="MainPanel">
        <div className="container-fluid cont">
          <div className="jumbotron signup">
            <h1>Sign Up</h1>
            <input placeholder="First Name" className="col-md-5 name" />
            <input placeholder="Last Name" className="col-md-5 col-md-offset-2 name" />
            <input placeholder="Email" className="col-md-12 email"/>
            <button className="button"><h4>SIGN UP</h4></button>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPanel;