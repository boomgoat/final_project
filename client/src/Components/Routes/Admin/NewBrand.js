import React, { Component } from 'react';
import '../../../App.css';
import CreateBrand from '../../Admin/manageBrands/createBrand';
import SidePanel from '../../Admin/Generic/sidePanel';
import { signup } from '../../../redux/users/actions';

class NewBrand extends Component {

    submit = data => 
    this.props.signup(data).then(() => this.props.history.push("/newBrand"));

  render() {
    return (
      <div className="Login">
        <SidePanel/>
        <CreateBrand/>
      </div>
    );
  }
}


NewBrand.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    NewBrand: PropTypes.func.isRequired
  }
  
  export default connect(null, {signup} )(NewBrand);