import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './jl.css';
import { connect } from 'react-redux';
import { fetchJobs } from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap'; 


class JobListing extends Component {

    state = {}

    componentDidMount() {
		this.props.fetchJobs();
	}

    render() {
        const { jobs } = this.props
        return (
            <div className="jumbotron fade-in text-left mainFeed col-md-8">
                <h1 className="feedHeader"> My Job Feed </h1>
                { jobs.map(({ _id, title, budget, description }) => (
                <NavLink className="link fade-in-slow" to={`/jobDesc/${_id}`} key={_id}>
                    <Row className="borders">
                        <Col><h2 className="col-md-12 title"><strong>{ title }</strong></h2></Col>
                        <Col className="text-right"><h3 className="col-md-12 budget"><strong className="budg">Budget:</strong> { budget } Points</h3></Col>
                        <Col md={12}><p className="col-md-12 desc">{ description }</p></Col>
                    </Row>
                </NavLink>
                ))}
            </div>
        )
    }
}

JobListing.propTypes = {
	fetchJobs: PropTypes.func.isRequired,
	jobs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	jobs: state.jobs
});

export default connect(mapStateToProps, { fetchJobs })(JobListing);