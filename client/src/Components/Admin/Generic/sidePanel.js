import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './generic.css';
import logo from "../../Resources/Logo/Icon.png";
import {logout} from '../../../redux/admin/actions'


class SidePanel extends Component {
    render() {
        return(
            <div className="col-md-2  sidepanel">
            <img className="lg" src={ logo } alt="logo"/>
                <ul className="hidden-xs hidden-sm">
                    <NavLink to="/admin"><li className="menuItems"><h3>Home</h3></li></NavLink>
                    <NavLink to="#"><li className="menuItems"><h3>Jobs</h3></li></NavLink>
                    <NavLink to="/adm/dashboard"><li className="menuItems"><h3>Dashboard</h3></li></NavLink>
                    <NavLink to="/" onClick= {logout()}><li className="menuItems"><h3>Logout</h3></li></NavLink>
                </ul>
            </div>
        );
    }
}

export default SidePanel;