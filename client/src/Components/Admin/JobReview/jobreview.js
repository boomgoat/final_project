import React, { Component } from 'react';
import styles from './jr.css';
import { NavLink } from 'react-router-dom';
import { Row, Table  } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchJobs } from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';



class JobReview extends Component {
    componentDidMount() {
		  this.props.fetchJobs();
    }
    render() {
        const { jobs } = this.props
        return(
            <div className="mainBox">
            <div className="jumbotron fade-in col-md-10 jobReview">
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
                    { jobs.map(({ _id, title, budget, description }) => (
                        <tr>
                        <th scope="row">{_id}</th>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>
                            <select
                            className="inputStyles col-md-2 col-sm-2"
                            type="text" name="duration"
                            placeholder="duration"
                            >
                            <option>1</option>
                            <option>5</option>
                            </select>
                        </td>
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

JobReview.propTypes = {
	fetchJobs: PropTypes.func.isRequired,
	jobs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	jobs: state.jobs
});

export default connect(mapStateToProps, { fetchJobs })(JobReview);