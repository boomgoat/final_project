import React, { Component } from 'react';
import styles from './header.css';
import logo from "../../Resources/Logo/Icon.png";
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/userActions';
import { logout } from '../../../actions/auth';
import PropTypes from 'prop-types';



class Header extends Component {

	componentDidMount() {
		this.props.getUsers();
	}

  render() {
		const { users } = this.props.user
    return (
			<div className="Header">
			{ users.map(({ id, name }) => (
			<div className="container">
			
				<NavLink to='/feed' className="col-md-2 col-sm-5">
				<img className="logo" src = { logo } alt="logo"/>
				</NavLink>
							
				<input className="Search col-md-1 col-sm-2 hidden-xs" placeholder="Find Workers"/>
				<div className="mobileMenu hidden-md hidden-lg hidden-sm">
					<i className="fa fa-navicon"></i>
				</div>

				<div className="mainNav col-md-8 col-sm-5 hidden-xs">
				
					
					<NavLink to='/feed' className="navL  col-md-offset-7 col-md-1 hidden-sm">
						<h4><span className="glyphicon glyphicon-home"></span></h4>
					</NavLink>
					<NavLink to='/login' className="navL col-md-1 col-sm-2">
						<h4><span className="glyphicon glyphicon-envelope"></span></h4>
					</NavLink>

					
					<UncontrolledDropdown className="col-md-3 navL">
						<DropdownToggle tag="a" className="nav-link ddLink" caret>
						{name}
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>Welcome Back {name}!</DropdownItem>
							<DropdownItem disabled>Action</DropdownItem>
							<NavLink to='/profile'>
								<DropdownItem>View Profile</DropdownItem>
							</NavLink>
							<DropdownItem divider/>
							<NavLink to='/' onClick={logout()}>
								<DropdownItem>LOG OUT</DropdownItem>
							</NavLink>
						</DropdownMenu>
					</UncontrolledDropdown>
				
				</div>
			
			</div>
		))}
      </div>
    );
  }
}

Header.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user,
	isAuthenticated: !!state.loginUser.token
});

export default connect(mapStateToProps, { getUsers, logout })(Header);