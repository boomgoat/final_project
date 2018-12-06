import React, { Component } from 'react';
import styles from './user.css';
import { NavLink } from 'react-router-dom';
import { Row, Col, Table  } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/users/actions';
import PropTypes from 'prop-types';



class ManageUser extends Component {
    componentDidMount() {
		this.props.getUsers();
  }
    render() {
        const { user } = this.props
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
                        <th>First Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    { user.map(({ _id, firstName }) => (
                    <tr>
                        <th scope="row">1</th>
                        <NavLink to="/adm/dashboard"><td>{firstName}</td></NavLink>
                        <td>Otto</td>
                        <td>Active</td>
                        <NavLink to="#"><td> <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></td></NavLink>
                        <td> <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
                    </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}

ManageUser.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user.user
});

export default connect(mapStateToProps, { getUsers })(ManageUser);