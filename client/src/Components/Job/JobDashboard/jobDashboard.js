import React, {Component} from 'react';
import styles from './jd.css';
import {NavLink} from 'react-router-dom';
import {Row, Table} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchJobs} from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';


class JobDash extends Component {
  state = {
    myJobs: []
  };

  componentDidMount() {
    this.props.fetchJobs()
      .then(({payload}) => this.setState({myJobs: this.extractMyJobs(payload)}));
  }

  extractMyJobs = jobs => jobs.filter(job => job.userId === this.props.id);

  render() {
    const {myJobs} = this.state;
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
          {myJobs.map(({_id, title, budget, description}) => (
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

JobDash.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.data,
  id: state.user.user.id
});

export default connect(mapStateToProps, {fetchJobs})(JobDash);