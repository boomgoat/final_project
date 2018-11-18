import React, { Component } from 'react';
import styles from './header.css';
import logo from "../../Resources/Logo/Icon.png";
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="Header hidden-sm hidden-xs">
       	<div className="container-fluid">
       	 	<NavLink to='/' className="col-md-3 col-sm-5">
       	 	<img className="logo col-md-4 col-lg-3 col-sm-3" src = { logo } alt="logo"/>
       	 	<h1 className="logoText col-md-6 col-sm-6 hidden-xs">FAVOR <span className="titleColor">BANK</span></h1>
       	 	</NavLink>
        	<input className="Search col-md-1 col-sm-2 hidden-xs" placeholder="Find Workers"/>
					<div className="mobileMenu hidden-md hidden-lg hidden-sm">
						<i className="fa fa-navicon"></i>
					</div>
					<div className="mainNav col-md-8 col-sm-5 hidden-xs">
						
						
		          <NavLink to='/signup' className="navL col-md-3 col-sm-5">
		          	<h4>SIGN UP</h4>
		          </NavLink>

		          <NavLink to='/login' className="navL col-md-3 col-sm-2">
		          	<h4>LOGIN</h4>
							</NavLink>
							<NavLink to='/howItWorks' className="navL col-md-3 hidden-sm">
								<h4>HOW IT WORKS</h4>
							</NavLink>
							
							<NavLink to='/signup' className="navL col-md-3 active">
								<button className="but" type="button">
									<h3>CREATE JOB</h3>
								</button>
							</NavLink>
        		  

		        
        	</div>
       	</div>

      </div>
    );
  }
}
export default Header;