import React, { Component } from 'react';
import styles from './cj.css';
import { NavLink } from 'react-router-dom';
import pingy from "../../Resources/Images/job.png";
import { Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';



class CreateJob extends Component {
    render() {
        return(
            <div className="createJob">
                <div className="jumbotron col-md-6 jobForm">
                <Form onSubmit>
                <FormGroup>
                  <div className="container text-left">
    
                    <div className="row">
                      <Label className="col-md-2 col-sm-2 labelText">
                        Job Title:
                      </Label>
    
                      <Input
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="title"
                      placeholder="Job Title"
                      />

                      <Label className="col-md-offset-2 col-sm-offset-2 col-md-2 col-sm-2 labelText">
                        Category:
                      </Label>
    
                      <Input
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="category"
                      list="categories"
                      placeholder="Category"
                      />

                      <datalist id="categories">
                        <option>Cat 1</option>
                        <option>Cat 2</option>
                        <option>Cat 3</option>
                      </datalist>
    
    
                    </div>

                    <div className="row">
                      <Label className="col-md-2 col-sm-2 labelText">
                        Budget:
                      </Label>
    
                      <Input
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="budget"
                      placeholder="$"
                      />

                      <Label className="col-md-offset-2 col-sm-offset-2 col-md-2 col-sm-2 labelText">
                        Duration:
                      </Label>
    
                      <select
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="duration"
                      placeholder="duration"
                      >
                      <option>1 hour</option>
                      <option>5 hours</option>
                      </select>
    
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-2 col-sm-2 labelText">Description:</Label>
    
                      <Input
                        className="col-md-8 col-sm-8 inputStyles"
                        type="textarea"
                        name="desc"
                        placeholder="Desc."
                        />
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-2 col-sm-2 labelText">About:</Label>
    
                      <Input
                        className="col-md-8 col-sm-8 inputStyles"
                        type="textarea"
                        name="about"
                        placeholder="100 words at least"
                        />
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-2 col-sm-2 labelText">Required Skills:</Label>
    
                      <Input
                        className="col-md-8 inputStyles"
                        type="textarea"
                        name="skills"
                        placeholder=""
                      />
    
                    </div>
                  </div>
    
                  <button className="button cjb col-md-4 col-md-offset-6 col-sm-4 col-sm-offset-3 col-xs-12">SAVE!</button>
    
                </FormGroup>
                </Form>
            </div>
            <div className="container col-md-6 infographic">
            
              
              <h1>Don't Forget the Details!</h1>
              <br/>
              <p className="text-left info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim 
              id est laborum.</p>
              <img className="pingy col-md-offset-4 col-md-4" src = { pingy } alt="pingy"/>
            </div>
            </div>
        );
    }
}

export default CreateJob