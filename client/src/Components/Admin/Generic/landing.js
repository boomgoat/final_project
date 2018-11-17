import React, { Component } from 'react';
import SidePanel from '../Generic/sidePanel';
import styles from './generic.css';
import { Container, Row, Jumbotron } from 'reactstrap';


class Landing extends Component {
    render() {
        return(
            <Container fluid={true} className="adminContainer">
                <SidePanel></SidePanel>
                <Jumbotron className="col-md-10 col-sm-12 col-xs-12 adminLanding">
                    <h1>Welcome Back John!</h1>
                    <h2 className="updateText"><span className="bold">Today's Updates:</span></h2>
                    <br/>
                    <h3><span className="bold">34</span> new accounts</h3>
                    <h3><span className="bold">26</span> new complaints</h3>
                    <h3><span className="bold">3</span> new jobs</h3>
                </Jumbotron>
            </Container>
        );
    }
}

export default Landing;