import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './settings.css';
import {Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {updateUser} from '../../../redux/users/actions';
import {getUsers} from '../../../redux/users/actions';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

class Settings extends Component {
    state = {
        data: {
            firstName: '',
            lastName: '',
            age: '',
            availability: '',
            gender: '',
            phone: '',
            about: '',
            skills: '',
            id: null
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

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

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    submit = data => {
        return this.props.updateUser({...data, id: this.props.user.id})
            .then(() => {
                this.props.history.push("/profile")
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.setState({
            data: {...this.props.user,}
        });
    }

    render() {
        const {data} = this.state;
        const {firstName, lastName, about, skills, age, phone, availability} = data;
        return (
            <div className="ComForm settings settingBackGround container-fluid cont">
                <div className="jumbotron comform col-md-6 col-sm-6 col-xs-12">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <div className="container">

                                <Row>
                                    <Col>
                                        <Label className="text-left col-md-12">
                                            <h2>First Name</h2>
                                        </Label>
                                    </Col>
                                    <Col>
                                        <Input
                                            className="col-md-8 inputStyles"
                                            type="text" name="firstName"
                                            placeholder={firstName}
                                            onChange={this.onChange}
                                            value={data.firstName}
                                        />
                                    </Col>
                                    <Col>
                                        <Label className="text-left col-md-12">
                                            <h2>Last Name</h2>
                                        </Label>
                                    </Col>
                                    <Col>
                                        <Input
                                            className="col-md-8 inputStyles"
                                            type="text" name="lastName"
                                            placeholder={lastName}
                                            onChange={this.onChange}
                                            value={data.lastName}
                                        />
                                    </Col>
                                </Row>

                                <hr className="fieldDiv"/>

                                <Row>
                                    <Col>
                                        <Label className="col-md-1 col-sm-1">
                                            <h2>Age:</h2>
                                        </Label>
                                    </Col>
                                    <Col>
                                        <Input
                                            className="inputStyles"
                                            type="text" name="age"
                                            placeholder={age}
                                            onChange={this.onChange}
                                            value={data.age}
                                        />
                                    </Col>

                                    <Col>
                                        <Label className="col-md-2 col-sm-2">
                                        <h2>Availability:</h2> 
                                        </Label>
                                    </Col>
                                    <Col>
                                        <Input
                                            className="inputStyles"
                                            type="text" name="availability"
                                            placeholder={availability}
                                            onChange={this.onChange}
                                            value={data.availability}
                                        />
                                    </Col>
                                </Row>

                                <hr className="fieldDiv"/>

                                <Row>
                                    <Col md={2}>
                                    <Label className=" col-sm-2">
                                        <h2>Gender:</h2>
                                    </Label>
                                    </Col>

                                    <Col md={10}>
                                        <Col md={6}>
                                            <FormGroup check>
                                                <Label check>
                                                    <h2 className="col-md-6">Male</h2>
                                                    <Input className="col-md-6" type="radio" name="gender" onChange={this.onChange}
                                                        value="male"/>{' '}
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup check>
                                                <Label check>
                                                    <h2 className="col-md-6">Female</h2>
                                                    <Input className="col-md-6" type="radio" name="gender" onChange={this.onChange}
                                                        value="female"/>{' '}
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Col>
                                </Row>

                                <hr className="fieldDiv"/>

                                <Row>
                                    <Col md={3}>
                                    <Label className="col-md-1 col-sm-1"><h2>Phone:</h2></Label>
                                    </Col>
                                    <Col>
                                    <Input
                                        className="col-md-4 col-sm-1 inputStyles"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        onChange={this.onChange}
                                        placeholder={phone}
                                    />
                                    </Col>
                                </Row>

                                <hr className="fieldDiv"/>

                                <Row>
                                    <Col md={3}>
                                        <Label className="col-md-1 col-sm-1"><h2>About:</h2></Label>
                                    </Col>
                                    <Col md={8}>
                                        <Input
                                            className=" inputStyles"
                                            type="textarea"
                                            name="about"
                                            value={data.about}
                                            onChange={this.onChange}
                                            placeholder={about}
                                        />
                                    </Col>
                                </Row>

                                <hr className="fieldDiv"/>

                                <Row>
                                    <Col md={3}>
                                        <Label className="col-md-1 col-sm-1"><h2>Skills:</h2></Label>
                                    </Col>
                                    <Col>
                                        <Input
                                            className="col-md-8 inputStyles"
                                            type="textarea"
                                            name="skills"
                                            onChange={this.onChange}
                                            value={data.skills}
                                            placeholder={skills}
                                        />
                                    </Col>
                                </Row>
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