import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.css';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/userActions';
import PropTypes from 'prop-types';
import pp from "./dingus.jpg";

class Profile extends Component {
  
	componentDidMount() {
		this.props.getUsers();
  }
  
  render() {
    const { users } = this.props.user
    return (
      <div className="container-fluid cont">
      { users.map(({ id, name }) => (
        <div className="container">
        
          <div className="jumbotron text-left prof col-md-9">
            <img src= { pp } className="pp col-md-2" alt="profile-picture"/>
            <h2 className="col-md-7 name">Welcome Back {name}</h2>
            <p className="about">
              Lorem ipsum dolor sit amet, 
              nec sanctus debitis omittam id, 
              vix soleat tibique id. Consetetur 
              conclusionemque vel no, dicant 
              nullam eam ei. Pri possim audiam 
              inimicus id, ne veniam dicunt singulis 
              per. Labore graecis nam ea, cum ei 
              nonumy appareat, eos an unum nostrum. 
              Propriae conclusionemque eum ea, porro 
              nominati conceptam est ne, decore 
              quaerendum voluptatibus ea nec.

              Ei fugit congue tractatos vis. Id usu 
              maiorum commune definitiones. Cu vis 
              voluptua adipisci, alia ferri voluptatum 
              nam an, nam te vide reque. Iriure nusquam 
              ad pri.
            </p>
          </div>
          <div className="col-md-3 text-left">
          <button className="settingsButn col-md-12"><h4>Profile Settings</h4></button>
            <ul className="sidePanels">
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
              <li><h4>Action</h4></li>
            </ul>
          </div>
        
        </div>
        ))};
      </div>
    );
  }
}

Profile.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUsers })(Profile);