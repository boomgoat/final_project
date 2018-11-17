import React, { Component } from 'react';
import SidePanel from '../Generic/sidePanel';
import styles from './dashboard.css';
import { Container, Row, Jumbotron } from 'reactstrap';


class Dashboard extends Component {
    render() {
        return(
            <Container fluid={true}>
                <SidePanel></SidePanel>
                <Jumbotron className="col-md-10"></Jumbotron>
            </Container>
        );
    }
}

export default Dashboard;