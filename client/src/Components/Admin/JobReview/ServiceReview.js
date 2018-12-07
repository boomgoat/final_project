import React, { Component } from 'react';
import styles from './jr.css';
import { NavLink } from 'react-router-dom';
import { Row, Table  } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchServices } from '../../../redux/services/actions';
import PropTypes from 'prop-types';



class SerReview extends Component {
    componentDidMount() {
        this.props.fetchServices();
    }
    render() {
        const { services } = this.props
        return(
            <div className="mainBox">
            <div className="jumbotron fade-in col-md-10 serReview">
                <Table className="fade-in-slow">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                { services.map(({ _id, title, price, description }) => (
                    <tr>
                    <th scope="row">{_id}</th>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
                    <td> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
                    </tr>
                ))}
                </tbody>
                </Table>
            </div>
            </div>
        );
    }
}


SerReview.propTypes = {
	fetchServices: PropTypes.func.isRequired,
	services: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	services: state.services
});

export default connect(mapStateToProps, { fetchServices })(SerReview);