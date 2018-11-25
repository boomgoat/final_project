import React, { Component } from 'react';
import styles from './dashboard.css';
import { NavLink } from 'react-router-dom';
import { Row, Table  } from 'reactstrap';
import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';


class AdDash extends Component {
    componentDidMount() {
		  this.props.getJobs();
    }
    render() {
        return(
            <div className="adDashboard fade-in">
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
                <td>Title</td>
                <td>Description</td>
                <td> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
                <td> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
              </tr>
            </tbody>
          </Table>
            </div>
        );
    }
}

AdDash.propTypes = {
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { getJobs })(AdDash);