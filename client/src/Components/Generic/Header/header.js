import React, { Component } from 'react';
import logo from "../../Resources/Logo/Icon.png";
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="Header">
       	<div>
       	 	<NavLink to='/' className="col-md-3">
       	 	<img className="logo col-md-2" src = { logo } alt="logo"/>
       	 	<h1 className="logoText col-md-6 hidden-xs">FAVOR <span className="titleColor">BANK</span></h1>
       	 	</NavLink>
        	<input className="Search col-md-1 hidden-xs" placeholder="Find Workers"/>
        	<div className="mainNav hidden-xs">
        		<ul className="nav">

        		  <li><button className="but" type="button">
	        		  <NavLink to='/signup' className="active">
	        		 	 CREATE JOB
	        		  </NavLink>
        		  </button></li>

		          <NavLink to='/signup' className="navL">
		          	<li><h4>SIGN UP</h4></li>
		          </NavLink>

		          <NavLink to='/login' className="navL">
		          	<li><h4>LOGIN</h4></li>
		          </NavLink>
		          <li><h4>HOW IT WORKS</h4></li>
		        </ul>
        	</div>
       	</div>

      </div>
    );
  }
}
export default Header;