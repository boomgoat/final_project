import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './cf.css';
import { Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { updateUser } from '../../../redux/users/actions';
import PropTypes from 'prop-types';

class ComForm extends Component {
  state = {
    data: {
      age: '',
      gender: '',
      phone:'',
      about:'',
      skills:''
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

  submit = data => this.props.updateUser(data)
  .then(() => this.props.history.push("/"))
  .catch(err => console.log(err));

  render() {
    const {data} = this.state;
    return (
      <div className="ComForm container-fluid cont">
        <div className="jumbotron comform col-md-6 col-sm-6 col-xs-12">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <div className="container">

                <div className="row">
                  <Label className="col-md-1">
                    Age:
                  </Label>

                  <Input
                  className="col-md-1"
                  type="text" name="age"
                  placeholder="Age"
                  onChange={this.onChange}
                  value={data.age}
                  />

                  <Label className="col-md-offset-4 col-md-2">
                    Gender:
                  </Label>

                  <Col>
                    <Label className="col-md-1">
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

                    <Label className="col-md-1">
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

                  <Label className="col-md-1">Phone:</Label>

                  <Input
                    className="col-md-4"
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={this.onChange}
                    placeholder="Phone Number"
                    />

                </div>

                <div className="row">

                  <Label className="col-md-1">About:</Label>

                  <Input
                    className="col-md-8"
                    type="textarea"
                    name="about"
                    value={data.about}
                    onChange={this.onChange}
                    placeholder="100 words at least"
                    />

                </div>

                <div className="row">

                  <Label className="col-md-1">Skills:</Label>

                  <Input
                    className="col-md-8"
                    type="textarea"
                    name="skills"
                    onChange={this.onChange}
                    value={data.skills}
                    placeholder="At least 10"
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

ComForm.propTypes = {
  // submit: PropTypes.func.isRequired
}

export default connect(null, {updateUser})(ComForm);