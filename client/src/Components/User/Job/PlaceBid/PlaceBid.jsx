import React, { Component } from 'react';
import { Row, Col, Label, Input, ModalHeader, ModalBody, ModalFooter, Button, Modal } from "reactstrap";
import styles from '../job.css';
import bid from '../../../Resources/Images/bidding.png';

class PlaceBid extends Component {

  state = {
    bidValue: '',
    bidInfo: ''
  }

  submit = () => {
    const {submitBid, job, user} = this.props;
    const {bidValue, bidInfo} = this.state;

    submitBid({bidValue, bidInfo, jobId: job._id, userId: user._id, status: false});
  };

  render() {
    const {isOpen, toggle} = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle} className="fade-in-slow">
        <ModalHeader toggle={toggle}>PLACE BID</ModalHeader>
        <ModalBody className="jobs">
          <Row>
            <Col>
              <Row><h1>Up for the Job?</h1></Row>
              <Row><h2>Please provide the following details!</h2></Row>
            </Col>
          </Row>
          <div className="row">
            

            <Col>
              <Label className="">Your Bid:</Label>
            </Col>
            <Col>
              <Input
                className="bidInfo"
                type="text"
                name="BidPrice"
                onChange={(e)=> this.setState({bidValue: e.target.value})}
                value={this.state.bidValue}
                placeholder="Enter Amount"
              />
            </Col>

          </div>

          <div className="row">

            <Col>
              <Label className="">Bid Description:</Label>
            </Col>
            <Col>
              <Input
                className="bidInfo"
                type="textarea"
                name="BidInfo"
                onChange={(e)=> this.setState({bidInfo: e.target.value})}
                value={this.state.bidInfo}
                placeholder="At least 10"
              />
            </Col>

          </div>
          <Row>
            <Col md={6}>
              <img className="col-md-12" src={bid}/>
            </Col>
          </Row>

        </ModalBody>
        <ModalFooter>
          <Button className="butn2 mainButn" onClick={this.submit}>Place Bid!</Button>{' '}
          <Button className="butn2" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}


export default PlaceBid;
