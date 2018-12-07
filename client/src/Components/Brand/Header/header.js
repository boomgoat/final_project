import React, { Component } from 'react';
import styles from './header.css';
import logo from "../../Resources/Logo/Icon.png";
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/users/actions';
import PropTypes from 'prop-types';
import { logout } from '../../../redux/brands/actions';



class Header extends Component {

	componentDidMount() {
		this.props.getUsers();
	}

  render() {
    return (
			<div className="BrandHeader hidden-xs hidden-sm">
			<div className="container-fluid">
			
				<NavLink to='/brand' className="col-md-3 col-sm-5">
				<img className="logoB" src = { logo } alt="logo"/>
				</NavLink>
							
				
				<div className="mobileMenu hidden-md hidden-lg hidden-sm">
					<i className="fa fa-navicon"></i>
				</div>

				<div className="mainNav col-md-6 col-md-offset-3 col-sm-5 hidden-xs">
				
					<NavLink to='/newAd' className="navLB col-md-offset-1   col-md-3 hidden-sm">
						<h4>CREATE JOB</h4>
					</NavLink>
					<NavLink to='/adverts' className="navLB  col-md-3 hidden-sm">
						<h4>MY JOBS</h4>
					</NavLink>
					<NavLink to='/brand' className="navLB   col-md-1 hidden-sm">
						<h4><span className="glyphicon glyphicon-home"></span></h4>
					</NavLink>
					<NavLink to='/myBrand' className="navLB col-md-1 col-sm-2">
						<h4><span className="glyphicon glyphicon-user"></span></h4>
					</NavLink>

					<UncontrolledDropdown className="col-md-1 navLB">
						<DropdownToggle tag="a" className="nav-link  text-center ddLink">
							<h4><span className="glyphicon glyphicon-option-horizontal"></span></h4>
						</DropdownToggle>
						<DropdownMenu>
							<NavLink to='/profile'>
								<DropdownItem>View Profile</DropdownItem>
							</NavLink>
							<DropdownItem divider />
							<NavLink to='/' onClick={logout()}>
								<DropdownItem>LOG OUT</DropdownItem>
							</NavLink>
						</DropdownMenu>
					</UncontrolledDropdown>
				
				</div>
			
			</div>
		
      </div>
    );
  }
}

Header.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUsers })(Header);