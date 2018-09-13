import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './signup.css';

class MainPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email:'',
      password:'',
      fullname:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="MainPanel">
        <div className="container-fluid cont">
          <div className="jumbotron signup">
            <form onSubmit={this.onSubmit}>

              <h2 className="col-md-12 col-sm-12">Sign Up</h2>
              
              <div className="form-group">
                  <input type="text" 
                    value={this.state.fullname}
                    onChange={this.onChange}
                    placeholder="Full Name" 
                    className="col-md-5 col-sm-5 col-xs-12 name"
                    name="name" 
                  />
                  <input type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.onChange}
                      className="col-md-5 col-sm-5 col-xs-12 col-md-offset-2 col-sm-offset-2 name"
                      name="username" 
                  />
                  <input placeholder="Email" 
                  value={this.state.email}
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="email"
                  />
                  <input placeholder="Password" 
                      value={this.state.password}
                      onChange={this.onChange}
                      className="col-md-12 col-sm-12 col-xs-12 email"
                      name="password"
                  />
                  <NavLink to='/newUser'>
                    <button type="submit" className="button col-md-12 col-sm-12 col-xs-12">SIGN UP</button>
                  </NavLink>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPanel;