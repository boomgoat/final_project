import React, { Component } from 'react';
import '../../../App.css';
import CreateBrand from '../../Admin/manageBrands/createBrand';
import SidePanel from '../../Admin/Generic/sidePanel';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class NewBrand extends Component {

    submit = data => 
    this.props.newBrand(data).then(() => this.props.history.push("/newBrand"));

  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <CreateBrand submit={this.submit}/>
      </div>
    );
  }
}


NewBrand.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    newBrand: PropTypes.func.isRequired
  }
  
  export default connect(null, {} )(NewBrand);