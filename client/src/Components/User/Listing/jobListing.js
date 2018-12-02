import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './jl.css';
import { connect } from 'react-redux';
import { fetchJobs } from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap'; 


class JobListing extends Component {

    state = {}

    componentDidMount() {
		this.props.fetchJobs();
	}

    render() {
        const { jobs } = this.props
        return (
            <div className="jumbotron fade-in text-left mainFeed col-md-8">
                <h2> My Job Feed </h2>
                { jobs.map(({ _id, title, budget, desc }) => (
                <NavLink className="link fade-in-slow" to="/jobDesc" key={_id}>
                    <Row className="borders">
                        <h2 className="col-md-12">{ title }</h2>
                        <h3 className="col-md-12">{ budget }</h3>
                        <p className="col-md-12 desc">{ desc }</p>
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