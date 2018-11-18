import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './settings.css';
import { Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { updateUser } from '../../../redux/users/actions';
import { getUsers } from '../../../redux/users/actions';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Settings extends Component {
  state = {
    data: {
      age: '',
      gender: '',
      phone:'',
      about:'',
      skills:'',
      id: null
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = (e) =>{
    e.preventDefault();
    // const errors = this.validate(this.state.data);
    // this.setState({ errors });
    this.submit(this.state.data)
      .catch(err => this.setState({ errors: err.response.data.errors }));

    // if (Object.keys(errors).length === 0){
    //   this.props.submit(this.state.data)
    //   .catch(err => this.setState({ errors: err.response.data.errors }));
    // }
  };

  onChange = e =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  submit = data => {
    return this.props.updateUser({...data, id: this.props.user._id})
    .then(() => {
      this.props.history.push("/profile")
    })
    .catch(err => console.log(err));
  };

  componentDidMount() {
      this.props.getUsers();
  }

  render() {
    const {data} = this.state;
    const {  about, skills, age, phone } = this.props.user
    return (
      <div className="ComForm container-fluid cont">
        <div className="jumbotron comform col-md-6 col-sm-6 col-xs-12">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <div className="container">

                <div className="row">
                  <Label className="col-md-1 col-sm-1">
                    Age:
                  </Label>

                  <Input
                  className="col-md-1 col-sm-1"
                  type="text" name="age"
                  placeholder={age}
                  onChange={this.onChange}
                  value={data.age}
                  />

                  <Label className="col-md-offset-3 col-md-1 col-sm-2">
                    Gender:
                  </Label>

                  <Col>
                    <Label className="col-md-1 col-sm-1">
                      Male
                    </Label>

                    <Input
                      type="radio"
                      name="gender"
                      onChange={this.onChange}
                      value={data.gender}
                      />

                  </Col>

                  <Col>

                    <Label className="col-md-1 col-sm-1">
                      Female
                    </Label>

                    <Input
                      type="radio"
                      name="gender"
                      onChange={this.onChange}
                      value={data.gender}
                    />

                  </Col>

                </div>

                <div className="row">

                  <Label className="col-md-1 col-sm-1">Phone:</Label>

                  <Input
                    className="col-md-4 col-sm-1"
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={this.onChange}
                    placeholder={phone}
                    />

                </div>

                <div className="row">

                  <Label className="col-md-1 col-sm-1">About:</Label>

                  <Input
                    className="col-md-8 col-sm-1"
                    type="textarea"
                    name="about"
                    value={data.about}
                    onChange={this.onChange}
                    placeholder={about}
                    />

                </div>

                <div className="row">

                  <Label className="col-md-1 col-sm-1">Skills:</Label>

                  <Input
                    className="col-md-8"
                    type="textarea"
                    name="skills"
                    onChange={this.onChange}
                    value={data.skills}
                    placeholder={skills}
                  />

                </div>
              </div>

              <button className="button col-md-12 col-sm-12 col-xs-12">SAVE!</button>

            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  // submit: PropTypes.func.isRequired
    getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user.user
});

export default withRouter(connect(mapStateToProps, {updateUser, getUsers})(Settings));