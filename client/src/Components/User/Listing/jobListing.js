import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './jl.css';
import { connect } from 'react-redux';
// import { getUsers } from '../../../actions/userActions';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap'; 


class JobListing extends Component {
    render() {
        return (
            <div className="jumbotron text-left mainFeed col-md-8">
                <h2> My Job Feed </h2>
                <Row className="borders">
                    <h2 className="col-md-12">Title</h2>
                    <h3 className="col-md-12">Budget</h3>
                    <p className="col-md-12 desc">Description</p>
                </Row>
                <Row className="borders">
                    <h2 className="col-md-12">Title</h2>
                    <h3 className="col-md-12">Budget</h3>
                    <p className="col-md-12 desc">Description</p>
                </Row>
            </div>
        )
    }
}

export default JobListing;