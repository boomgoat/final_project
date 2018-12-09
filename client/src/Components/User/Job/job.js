import React, {Component} from 'react';
import styles from './job.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchJob, submitBid} from '../../../redux/jobs/actions';
import {getUser} from '../../../redux/users/actions';
import {withRouter} from 'react-router';
import { Input, Row, Col, Button} from 'reactstrap';
import PlaceBid from "./PlaceBid/PlaceBid";

class Job extends Component {
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

  fetchUser = id => {
    debugger
    this.props.getUser(id)
      .then(user => {
        this.setState({jobOwner: user})
      })
      .catch(err => console.log(err))
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

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

  render() {
    const {description, title, reviews, budget} = this.state;
    const budgetValue = budget ? budget : 0;
    const {submitBid, job, user} = this.props;
    console.log(job)
    return (
      <div className="container-fluid backgroundColor">
        <div className="jumbotron jobs col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
          <Row>
            <h1>{title}</h1>
          </Row>
          <Row>
            <h3 className="col-md-6 text-left">Job By: {this.props.user.firstName} </h3>
            <h3 className="col-md-6 text-center">{`Budget: $${budgetValue}`}</h3>
          </Row>
          <Row>
            <p className="text-left description">
             {description}
            </p>
          </Row>
          <Row>
            <Button className="butn" onClick={this.toggle}>Place Bid</Button>
          </Row>
        </div>

        <Row className="fadeFix">
          <PlaceBid
            job={job}
            user={user}
            isOpen={this.state.modal}
            toggle={this.toggle}
            submitBid={submitBid}
          />
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

const mapStateToProps = (state, ownProps) => {
  const job = state.jobs.data.filter(job => job._id === ownProps.match.params._id);
  return {
    user: state.user.user,
    job
  }
};

export default withRouter(connect(mapStateToProps, {fetchJob, getUser, submitBid})(Job));
