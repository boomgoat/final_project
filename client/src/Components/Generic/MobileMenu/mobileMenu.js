import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './mm.css';


class MobileMenu extends Component {
  render() {
    return (
        <div className="mobileMenu hidden-md hidden-lg">
            <UncontrolledDropdown className="col-md-3 ">
                <DropdownToggle tag="a" className="nav-link mobMenu ddLink">
                    <h4><span className="glyphicon  glyphicon-menu-hamburger "></span></h4>
                </DropdownToggle>

                <DropdownMenu className="mobmen text-center">

                    <NavLink to='#'>
                        <DropdownItem className="itemsMobile">Home</DropdownItem>
                    </NavLink>

                    <DropdownItem divider />

                    <NavLink to='#'>
                        <DropdownItem className="itemsMobile">Profile</DropdownItem>
                    </NavLink>

                    <DropdownItem divider />

                    <NavLink to='#'>
                        <DropdownItem className="itemsMobile">Profile</DropdownItem>
                    </NavLink>

                    <DropdownItem divider />

                    <NavLink to='#'>
                        <DropdownItem className="itemsMobile">Profile</DropdownItem>
                    </NavLink>

                    <DropdownItem divider />

                    <NavLink to='#'>
                        <DropdownItem className="itemsMobile">Profile</DropdownItem>
                    </NavLink>

                </DropdownMenu>

            </UncontrolledDropdown>
        </div>
    );
  }
}
export default MobileMenu;