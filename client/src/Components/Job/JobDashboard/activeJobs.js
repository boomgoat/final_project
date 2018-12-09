import React, {Component} from 'react';
import styles from './jd.css';
import {NavLink} from 'react-router-dom';
import {Table} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchJobs} from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';
import '../../../App.css';
import Header from '../../User/Header/header';
import MobileMenu from '../../User/MobileMenu/mobileMenu';
import Footer from '../../Generic/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ActiveDash extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    const {fetchJobs, user, match: { params }} = this.props;
    debugger;
      fetchJobs()
        .then(jobs => {
        this.setState({
          jobs: jobs.filter(job => params.viewType === 'owner' ? job.userId : job.workerId !== user.id)
        })
      });
  }

  render() {
    const {jobs} = this.state;

    return (
      <div className="Login">
        <MobileMenu></MobileMenu>
        <Header />
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
                <td><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
                <td><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
        <Footer/>
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