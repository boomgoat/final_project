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
    const {bids = []} = this.state;
    const bidItems = bids.map(bid =>
      <div>
        <Row>
          <h1>Bids</h1>
        </Row>
        <Row>
          <Col md={3}>
            <h2>Name</h2>
          </Col>
          <Col md={3}>
            <h2>Amount</h2>
          </Col>
          <Col md={6}>
            <p>Info</p>
          </Col>
        </Row>
      </div>
    );
    return (
      <div className="jumbotron jobs col-md-8">
        {bidItems}
      </div>
    );
  }
}

export default BidInfo;