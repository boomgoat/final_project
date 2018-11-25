import React, { Component } from 'react';
import styles from './ServiceDash.css';
import { NavLink } from 'react-router-dom';
import { Row, Table  } from 'reactstrap';



class ServDash extends Component {
    render() {
        return(
            <div className="servDashboard">
            <Table>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Active</td>
                <td> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
                <td> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
              </tr>
            </tbody>
          </Table>
            </div>
        );
    }
}

export default ServDash