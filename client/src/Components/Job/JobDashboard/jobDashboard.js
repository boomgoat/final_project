import React, {Component} from 'react';
import styles from './jd.css';
import {NavLink} from 'react-router-dom';
import {Row, Col, Label, Input, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchJobs} from '../../../redux/jobs/actions';
import PropTypes from 'prop-types';
import completed from '../../Resources/Images/completed.png'


class JobDash extends Component {
  state = {
    myJobs: []
  };

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.props.fetchJobs()
      .then(jobs => this.setState({myJobs: this.extractMyJobs(jobs)}));
  }

  extractMyJobs = jobs => jobs.filter(job => job.userId === this.props.id);

  render() {
    const {myJobs} = this.state;
    return (
      <div className="jobDashboard">

      {/*                         TABLE                        */}


        <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Bids</th>
            <th></th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {myJobs.map(({_id, title, budget, description}) => (
            <tr key={_id}>
              <th scope="row">{_id}</th>
              <td>{title}</td>
              <td>{description}</td>
              <td>Bids</td>
              <td><button className="complete" onClick={this.toggle}>Complete Job</button></td>
              <td><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
              <td><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
            </tr>
          ))}
          </tbody>
        </Table>

        {/*                         TABLE END                        */}



        {/*                         MODAL                        */}


        <Row className="fadeFix">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="fade-in-slow">
            <ModalHeader toggle={this.toggle}>Completion Form</ModalHeader>
            <ModalBody className="jobs">
            <Row>
              <Col>
                <Row><h1>Is your job Completed?</h1></Row>
                <Row><h2>Please provide the following details!</h2></Row>
              </Col>
              <Col>
                <img className="col-md-12" src={completed}/>
              </Col>
            </Row>
            
            
            
              <Row>

                <Col md={2}>
                  <Label className="">Review:</Label>
                </Col>
                <Col>
                  <Input
                    className="bidInfo"
                    type="textarea"
                    name="Review"
                    onChange={this.onChange}
                    placeholder="What did you think about the services recieved?"
                  />
                </Col>

              </Row>

              <Row>

                <Col md={2}>
                  <Label className="">Rating:</Label>
                </Col>
                <Col>
                <select
                  onChange={this.onChange}
                  className="inputStyle"
                  type="text" name="rating"
                  placeholder="Rating"
                >
                <option value="" selected disabled hidden>Select Rating</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
                </Col>

              </Row>

            </ModalBody>
            <ModalFooter>
              <Button className="butn2 mainButn" onClick={this.toggle}>Proceed</Button>{' '}
              <Button className="butn2" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Row>

        {/*                         MODAL END                        */}


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