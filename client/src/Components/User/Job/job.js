import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchJob, submitBid} from '../../../redux/jobs/actions';
import {getUser} from '../../../redux/users/actions';
import {withRouter} from 'react-router';
import { Input, Row, Col, Button} from 'reactstrap';
import PlaceBid from "./PlaceBid/PlaceBid";
import styles from './job.css';


class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        jobId: this.props.match.params._id,
        category: '',
        createdAt: '',
        description: '',
        title: '',
        reviews: '',
        ownerId: '',
        budget: ''

      },
      jobOwner: '',
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchJob(this.props.match.params._id)
      .then(({ payload }) => {
        const { title, reviews, budget, description, userId } = payload;
        this.setState({
          title,
          reviews,
          budget,
          description,
          ownerId: userId
        }, () => {
          this.fetchUser(this.state.ownerId);
        });
      });
  }

  fetchUser = id => {
    this.props.getUser(id)
      .then(user => {
        this.setState({ jobOwner: user })
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
      data: {...this.state.data, [e.target.name]: e.target.value}
    });

  submit = data => {
    return this.props.updateUser({...data, id: this.props.user._id})
      .then(() => {
        this.props.history.push("/profile")
      })
      .catch(err => console.log(err));
  };

  render() {
    const {submitBid, job, user, history} = this.props;
    return (
      <div className="container-fluid backgroundColor">
        <div className="jumbotron jobs col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
          <Row>
            <h1>{job.title}</h1>
          </Row>
          <Row>
            <h3 className="col-md-6 text-left">Job By: {user.firstName} </h3>
            <h3 className="col-md-6 text-center">Budget: {job.budget}</h3>
          </Row>
          <Row>
            <p className="text-left description">
             {job.description}
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
            history={history}
          />
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

const mapStateToProps = (state, ownProps) => {
  const job = state.jobs.filter(job => job._id === ownProps.match.params._id)[0];

  return {
    user: state.user.user,
    job
  }
};

export default withRouter(connect(mapStateToProps, {fetchJob, getUser, submitBid})(Job));
