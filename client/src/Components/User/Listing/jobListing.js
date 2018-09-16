import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './jl.css';
import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap'; 


class JobListing extends Component {

    componentDidMount() {
		this.props.getJobs();
	}

    render() {
        const { job } = this.props.job
        return (
            <div className="jumbotron text-left mainFeed col-md-8">
                <h2> My Job Feed </h2>
                { job.map(({ id, title, budget, desc }) => (
                <Row className="borders">
                    <h2 className="col-md-12">{ title }</h2>
                    <h3 className="col-md-12">{ budget }</h3>
                    <p className="col-md-12 desc">{ desc }</p>
                </Row>
                ))}
            </div>
        )
    }
}

JobListing.propTypes = {
	getJobs: PropTypes.func.isRequired,
	job: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	job: state.job
});

export default connect(mapStateToProps, { getJobs })(JobListing);