import React, { Component } from 'react';

class MPanel extends Component {
  render() {
    return (
      <div className="MPanel">
        <div className="container-fluid cont">
          <div className="jumbotron login">
            <h1>Log in and get to work</h1>
            <input placeholder="Username" className="col-md-12 email"/>
            <button className="buttol"><h4>LOGIN</h4></button>
          </div>
        </div>
      </div>
    );
  }
}
export default MPanel;