import React, { Component } from 'react';
import styles from './cj.css';
import pingy from "../../Resources/Images/job.png";
import InlineError from '../../Generic/Utilities/InlineError';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';



class CreateJob extends Component {
  state = {
    data: {
      title: '',
      category:'',
      budget:'',
      description:'',
      skills:'',
      duration: ''
    },
    loading: false,
    errors: {}
  };
  
  onChange = e =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = (e) =>{
    debugger
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0){
      this.props.submit(this.state.data)
      .catch(err => this.setState({ errors: err.response.data.errors }));
    }
  };

  validate = (data) => {
    const errors = {};
    if (!data.title) errors.title = "Can't be blank";
    if (!data.category) errors.cat = "Can't be blank";
    if (!data.budget) errors.budg = "Can't be blank";
    if (!data.description) errors.desc = "Can't be blank";
    if (!data.skills) errors.skill = "Can't be blank";
    if (!data.duration) errors.dur = "Can't be blank";
    return errors;
  }

    render() {
      const { data, errors } = this.state;
        return(
            <div className="createJob">
                <div className="jumbotron col-md-6 jobForm">
                <Form onSubmit={this.onSubmit}>
                {errors.global && (
                  <div className="alert alert-warning">Oops! Something went wrong!<br/>
                    {errors.global}
                  </div>
                )}
                <FormGroup>
                  <div className="container text-left">
    
                    <div className="row">
                      <Label className="col-md-2 col-sm-2 labelText">
                        Job Title:
                      </Label>
    
                      <Input
                      value={data.title}
                      onChange={this.onChange}
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="title"
                      placeholder="Job Title"
                      />

                      {errors.title && <InlineError text={errors.title} />}

                      <Label className="col-md-offset-2 col-sm-offset-2 col-md-2 col-sm-2 labelText">
                        Category:
                      </Label>
    
                      <Input
                      value={data.category}
                      onChange={this.onChange}
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="category"
                      list="categories"
                      placeholder="Category"
                      />

                      {errors.category && <InlineError text={errors.category} />}

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
                      value={data.budget}
                      onChange={this.onChange}
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="budget"
                      placeholder="$"
                      />

                      {errors.budget && <InlineError text={errors.budget} />}

                      <Label className="col-md-offset-2 col-sm-offset-2 col-md-2 col-sm-2 labelText">
                        Duration:
                      </Label>
    
                      <select
                      value={data.duration}
                      onChange={this.onChange}
                      className="inputStyles col-md-2 col-sm-2"
                      type="text" name="duration"
                      placeholder="duration"
                      >
                      <option>1</option>
                      <option>5</option>
                      </select>
    
                      {errors.duration && <InlineError text={errors.duration} />}
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-2 col-sm-2 labelText">Description:</Label>
    
                      <Input
                        value={data.description}
                        onChange={this.onChange}
                        className="col-md-8 col-sm-8 inputStyles"
                        type="textarea"
                        name="description"
                        placeholder="Desc."
                        />

                        {errors.description && <InlineError text={errors.description} />}
    
                    </div>
    
                    <div className="row">
    
                      <Label className="col-md-2 col-sm-2 labelText">Required Skills:</Label>
    
                      <Input
                        value={data.skills}
                       onChange={this.onChange}
                        className="col-md-8 inputStyles"
                        type="textarea"
                        name="skills"
                        placeholder=""
                      />

                      {errors.skills && <InlineError text={errors.skills} />}
    
                    </div>
                  </div>
    
                  <button type="submit" className="button cjb col-md-4 col-md-offset-6 col-sm-4 col-sm-offset-3 col-xs-12">SAVE!</button>
    
                </FormGroup>
                </Form>
            </div>
            <div className="container col-md-6 infographic">
            
              
              <h1>Dont Forget the Details!</h1>
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

CreateJob.propTypes = {
  submit: PropTypes.func.isRequired
}

export default CreateJob