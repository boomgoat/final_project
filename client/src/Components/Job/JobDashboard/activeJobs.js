import React, {Component} from 'react';
import styles from './jd.css';
import {NavLink} from 'react-router-dom';
import {Table} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchJobs} from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';


class ActiveDash extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    const {fetchJobs, user} = this.props;
    fetchJobs().then(jobs => {
      this.setState({
        jobs: jobs.filter(job => job.userId !== user.id)
      })
    })
  }

  render() {
    const {jobs} = this.state;

    return (
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
          {jobs.map(({_id, title, budget, description}) => (
            <tr>
              <th scope="row">{_id}</th>
              <td>{title}</td>
              <td>{description}</td>
              <td><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
              <td><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

ActiveDash.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    jobs: state.jobs.data
  }
};

export default connect(mapStateToProps, {fetchJobs})(ActiveDash);