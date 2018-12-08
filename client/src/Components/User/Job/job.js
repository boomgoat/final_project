import React, {Component} from 'react';
import styles from './job.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchJob} from '../../../redux/jobs/actions';
import {getUser} from '../../../redux/users/actions';
import {withRouter} from 'react-router';
import {Label, Input, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class Job extends Component {
  fetchUser = id => {
    this.props.getUser(id)
      .then(user => {
        this.setState({jobOwner: user})
      })
      .catch(err => console.log(err))
  };
  onChange = e =>
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    });
  submit = data => {
    return this.props.updateUser({...data, id: this.props.user._id})
      .then(() => {
        this.props.history.push("/profile")
      })
      .catch(err => console.log(err));
  };

  constructor(props) {
    super(props);
    this.state = {
      jobId: this.props.match.params._id,
      category: '',
      createdAt: '',
      description: '',
      title: '',
      reviews: '',
      ownerId: '',
      budget: '',
      jobOwner: '',
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const reviewsFixture = [{
      id: 321,
      reviewCreatorId: 123,
      reviewRecipientId: 124,
      message: 'I have experience with fixing things'
    }];
    this.props.fetchJob(this.props.match.params._id)
      .then(({payload}) => {
        const {title, budget, description, userId} = payload;
        this.setState({
          title,
          reviews: reviewsFixture,
          budget,
          description,
          ownerId: userId
        }, () => {
          this.fetchUser(this.state.ownerId);
        });
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {description, title, reviews, budget} = this.state;
    const budgetValue = budget ? budget : 0;
    return (
      <div className="container-fluid backgroundColor">
        <div className="jumbotron jobs col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
          <Row>
            <h1>{title}</h1>
          </Row>
          <Row>
            <h3 className="col-md-6 text-left">Job By: {this.props.match.params._id} ____</h3>
            <h3 className="col-md-6 text-center">{`Budget: $${budgetValue}`}</h3>
          </Row>
          <Row>
            <p className="text-left description">
              {description}
            </p>
          </Row>
          <Row>
            <button className="butn" onClick={this.toggle}>Place Bid</button>
          </Row>
        </div>

        <Row className="fadeFix">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="fade-in-slow">
            <ModalHeader toggle={this.toggle}>PLACE BID</ModalHeader>
            <ModalBody className="jobs">
              <div className="row">

                <Col>
                  <Label className="">Your Bid:</Label>
                </Col>
                <Col>
                  <Input
                    className="bidInfo"
                    type="text"
                    name="BidPrice"
                    onChange={this.onChange}
                    value=""
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
                    onChange={this.onChange}
                    value=""
                    placeholder="At least 10"
                  />
                </Col>

              </div>

            </ModalBody>
            <ModalFooter>
              <Button className="butn2 mainButn" onClick={this.toggle}>Do Something</Button>{' '}
              <Button className="butn2" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <div className="jumbotron reviews col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
          <Row>
            <h1>Comments</h1>
          </Row>
          {
            reviews.length > 0 &&
            reviews.map(({reviewCreatorId, message, id}) =>
              <Row className="text-justify" key={id}>
                <Col className="col-md-2">
                  <h2>{reviewCreatorId}</h2>
                </Col>
                <Col className="col-md-8">
                  <p>{message}</p>
                </Col>
              </Row>
            )
          }

          <Row>
            <Input type="textarea" className="inputStyles" placeholder="Your Review Here"/>
          </Row>
          <Row>
            <button className="butn">Submit</button>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user
});

export default withRouter(connect(mapStateToProps, {fetchJob, getUser})(Job));