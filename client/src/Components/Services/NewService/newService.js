import React, { Component } from 'react';
import styles from './ns.css';
import { NavLink } from 'react-router-dom';
import { Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';



class NewService extends Component {
    render() {
        return(
            <div className="newService">
                <div className="jumbotron servForm">
                <Form onSubmit>
                <FormGroup>
                  <div className="container">
    
                    <div className="row">
                      <Label className="col-md-1 col-sm-1">
                        Age:
                      </Label>
    
                      <Input
                      className="col-md-1 col-sm-1"
                      type="text" name="age"
                      placeholder="Age"
                      />
    
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-1 col-sm-1">Phone:</Label>
    
                      <Input
                        className="col-md-4 col-sm-1"
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        />
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-1 col-sm-1">About:</Label>
    
                      <Input
                        className="col-md-8 col-sm-1"
                        type="textarea"
                        name="about"
                        placeholder="100 words at least"
                        />
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-1 col-sm-1">Skills:</Label>
    
                      <Input
                        className="col-md-8"
                        type="textarea"
                        name="skills"
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

export default NewService