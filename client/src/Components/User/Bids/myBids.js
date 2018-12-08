import React, { Component } from 'react';
import styles from './mybids.css';
import { Table  } from 'reactstrap';


class MyBids extends Component {
    render() {
        return(
            <div className="jobDashboard">
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Bid Amount</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">id</th>
                <td>title</td>
                <td>description</td>
                <td>status</td>
                <td> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
              </tr>
            </tbody>
          </Table>
            </div>
        );
    }
}


export default MyBids;