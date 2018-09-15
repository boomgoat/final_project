import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './cf.css';
import { Form, FormGroup, Label, Input, Col} from 'reactstrap';

class ComForm extends Component {
  render() {
    return (
      <div className="ComForm container-fluid cont">
        <div className="jumbotron comform col-md-6 col-sm-6 col-xs-12">
          <Form>
            <FormGroup>
              <div className="container">
                <div className="row">
                  <Label className="col-md-1">Age:</Label> 
                  <Input className="col-md-1" type="text" name="age" placeholder="Age"/>
                  <Label className="col-md-offset-4 col-md-2">Gender:</Label>
                  <Col><Label className="col-md-1">Male</Label> <Input  type="radio" name="gender"/></Col>
                  <Col><Label className="col-md-1">Female</Label> <Input  type="radio" name="gender"/></Col>
                </div>
                <div className="row">
                  <Label className="col-md-1">Phone:</Label> 
                  <Input className="col-md-4" type="text" name="code" placeholder="Code"/>
                </div>
                <div className="row">
                  <Label className="col-md-1">About:</Label>
                  <Input className="col-md-8" type="textarea" name="code" placeholder="100 words at least"/>
                </div>
                <div className="row">
                  <Label className="col-md-1">Skills:</Label>
                  <Input className="col-md-8" type="textarea" name="code" placeholder="At least 10"/>
                </div>
              </div>
              <NavLink to='/profile'>
                <button className="button col-md-12 col-sm-12 col-xs-12">SAVE!</button>
              </NavLink>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default ComForm;