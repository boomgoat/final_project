import React, { Component } from 'react';
import styles from './brand.css';
import { Row, Col, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import completed from '../../Resources/Images/completed.png';



class ManageBrand extends Component {


    render() {
        return(
            <div className="mainBox">
                <div className="jumbotron fade-in col-md-10 mBrand">
                    <Row>
                        <Col>
                            <NavLink to="/createBrand">
                                <button className="newBrand">Create Brand Account</button>
                            </NavLink>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <br/><br/>
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Active</td>
                            <td> <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ManageBrand