import React, { Component } from 'react';
import styles from './generic.css';
import logo from "../../Resources/Logo/Icon.png";


class Footer extends Component {
    render() {
        return(
            <div className="col-md-12 footer">
                <img className="lg" src={ logo } alt="logo"/>
            </div>
        );
    }
}

export default Footer;