import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './brand.css';
import logo from "../../Resources/Logo/Icon.png";


class Profile extends Component {
    render() {
        return(
            <div className="container-fluid brand">
                <section className="Greeting fade-in col-md-12 text-center">
                    <h1><span className="boldHeading">favor</span>bank</h1>
                    <br/>
                    <hr/>
                    <h3>Open Source, Service Based Network</h3>
                </section>
                <section className="options col-md-12">
                    <div></div>
                </section>
            </div>
        );
    }
}

export default Profile;