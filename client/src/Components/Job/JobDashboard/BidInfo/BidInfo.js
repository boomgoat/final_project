import React, {Component} from 'react';
import styles from './jobBlock.css';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import api from '../../../api';


class BidInfo extends Component {
  state = {
    job: {}
  };

  componentDidMount() {
    // get bids list
    api.job.getOne(this.props.match.params._id)
      .then(job => {
        this.setState({job})
      })
  }

  render() {
    const {bids = []} = this.state.job;
    const bidItems = bids.length > 0 && bids.map(({ user, bidInfo, bidValue }) =>
      <Row>
        <Col md={3}>
          <h2>Name</h2>
          <h2>{user ? user.firstName : 'simon'}</h2>
        </Col>
        <Col md={3}>
          <h2>Amount</h2>
          <h2>{bidValue}</h2>
        </Col>
        <Col md={6}>
          <p>Info</p>
        </Col>
      </Row>
    );
    return (
      <div className="jumbotron jobs col-md-8">
        <Row>
          <Row>
            <h1>
              Bids
            </h1>
          </Row>
          <Row>{bids.length > 0 ? bidItems : 'No bids yet :('}</Row>
        </Row>
      </div>
    );
  }
}

export default BidInfo;