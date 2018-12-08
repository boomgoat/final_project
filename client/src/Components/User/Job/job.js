import React, {Component} from 'react';
import styles from './job.css';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchJob} from '../../../redux/jobs/actions';
import {withRouter} from 'react-router';
import {Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class Job extends Component {
  state = {
    data: {
      age: '',
      gender: '',
      phone: '',
      about: '',
      skills: '',
      id: ''
    },
    loading: false,
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();
    // const errors = this.validate(this.state.data);
    // this.setState({ errors });
    this.submit(this.state.data)
      .catch(err => this.setState({errors: err.response.data.errors}));

    // if (Object.keys(errors).length === 0){
    //   this.props.submit(this.state.data)
    //   .catch(err => this.setState({ errors: err.response.data.errors }));
    // }
  };

  componentDidMount() {
    this.props.fetchJob(this.props.match.params._id);
  }

  onChange = e =>
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
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
      data: {
        id: this.props.match.params._id
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    const {data} = this.state;
    return (
      <div className="container-fluid backgroundColor">
        <div className="jumbotron jobs col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
          <Row>
            <h1>Title</h1>
          </Row>
          <Row>
            <h3 className="col-md-6 text-left">Job By: {this.props.match.params._id} ____</h3>
            <h3 className="col-md-6 text-center">Budget: $x</h3>
          </Row>
          <Row>
            <p className="text-left description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus
              eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos
              cupiditate dolore doloribus!
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
            <h1>Reviews</h1>
          </Row>
          <Row className="text-justify">
            <Col className="col-md-2">
              <h2>Name:</h2>
              <h2>Rank:</h2>
            </Col>
            <Col className="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus
                eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos
                cupiditate dolore doloribus!</p>
            </Col>
          </Row>
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


Job.propTypes = {
  // submit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.user
});

export default withRouter(connect(mapStateToProps, {fetchJob})(Job));