import React, { Component } from 'react';
import styles from './generic.css';
import logo from "../../Resources/Logo/Icon.png";


class SidePanel extends Component {
    render() {
        return(
            <div className="col-md-2  sidepanel">
            <img className="lg" src={ logo } alt="logo"/>
                <ul className="hidden-xs hidden-sm">
                    <li className="menuItems"><h3>Home</h3></li>
                    <li className="menuItems"><h3>Profile</h3></li>
                    <li className="menuItems"><h3>Dashboard</h3></li>
                    <li className="menuItems"><h3>Profile</h3></li>
                </ul>
            </div>
        );
    }
}

export default SidePanel;