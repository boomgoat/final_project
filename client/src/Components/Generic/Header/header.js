import React, { Component } from 'react';
import styles from './header.css';
import logo from "../../Resources/Logo/Icon.png";
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="Header">
       	<div>
       	 	<NavLink to='/' className="col-md-3 col-sm-5">
       	 	<img className="logo col-md-4 col-lg-3 col-sm-3" src = { logo } alt="logo"/>
       	 	<h1 className="logoText col-md-6 col-sm-6 hidden-xs">FAVOR <span className="titleColor">BANK</span></h1>
       	 	</NavLink>
        	<input className="Search col-md-1 col-sm-2 hidden-xs" placeholder="Find Workers"/>
        	<div className="mainNav col-md-8 col-sm-5 hidden-xs">
        		<ul className="nav">

        		  <li><button className="but" type="button">
	        		  <NavLink to='/signup' className="active">
	        		 	 CREATE JOB
	        		  </NavLink>
        		  </button></li>

		          <NavLink to='/signup' className="navL col-md-4 col-sm-5">
		          	<li><h4>SIGN UP</h4></li>
		          </NavLink>

		          <NavLink to='/login' className="navL col-md-3 col-sm-2">
		          	<li><h4>LOGIN</h4></li>
							</NavLink>
							<NavLink to='#' className="navL col-md-3 hidden-sm">
							<li><h4>HOW IT WORKS</h4></li>
							</NavLink>
		        </ul>
        	</div>
       	</div>

      </div>
    );
  }
}
export default Header;