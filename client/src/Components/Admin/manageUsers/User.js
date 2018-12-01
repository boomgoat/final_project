import React, { Component } from 'react';
import styles from './user.css';
import { NavLink } from 'react-router-dom';
import { Row, Col, Table  } from 'reactstrap';



class ManageUser extends Component {
    render() {
        return(
            <div className="mainBox">
            <div className="jumbotron fade-in col-md-10 mUser">
                <Row>
                    <Col>Create Account</Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <br/><br/>
                <Table className="fade-in-slow">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <NavLink to="/adm/dashboard"><td>Mark</td></NavLink>
                        <td>Otto</td>
                        <td>Active</td>
                        <NavLink to="#"><td> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></td></NavLink>
                        <td> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}

export default ManageUser