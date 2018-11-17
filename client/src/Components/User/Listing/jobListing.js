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
        const { jobs } = this.props
        return (
            <div className="jumbotron text-left mainFeed col-md-8">
                <h2> My Job Feed </h2>
                { jobs.map(({ id, title, budget, desc }) => (
                <NavLink className="link" to="/jobDesc">
                    <Row className="borders" key={id}>
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
	getJobs: PropTypes.func.isRequired,
	jobs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	jobs: state.jobs
});

export default connect(mapStateToProps, { getJobs })(JobListing);