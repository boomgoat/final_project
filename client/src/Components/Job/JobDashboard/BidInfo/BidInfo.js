import React, { Component } from 'react';
import styles from './jobBlock.css';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';



class jobBlock extends Component {
    render() {
        return(
            <div className="jumbotron jobs col-md-8">
                <Row>
                    <h1>Bids</h1>
                </Row>
                    <Row>
                    <Col md={3}>
                        <h2>Name</h2>
                    </Col>
                    <Col md={3}>
                        <h2>Amount</h2>
                    </Col>
                    <Col md={6}>
                        <p>Info</p>
                    </Col>
                    </Row>
                    <Row>

                    </Row>
            </div>
        );
    }
}

export default jobBlock