import React, { Component } from 'react';
import styles from './jd.css';
import { NavLink } from 'react-router-dom';
import { Row, Table  } from 'reactstrap';
import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';


class JobDash extends Component {
    componentDidMount() {
		  this.props.getJobs();
    }
    render() {
      console.log(this.props.job)
      debugger
      const { title, description } = this.props.job
        return(
            <div className="jobDashboard">
            <Table>
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
              <tr>
                <th scope="row">1</th>
                <td>{title}</td>
                <td>{description}</td>
                <td> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
                <td> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
              </tr>
            </tbody>
          </Table>
            </div>
        );
    }
}

JobDash.propTypes = {
	getJob: PropTypes.func.isRequired,
	job: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	job: state.jobs.job
});

export default connect(mapStateToProps, { getJobs })(JobDash);