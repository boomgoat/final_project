import React, { Component } from 'react';
import SidePanel from '../Generic/sidePanel';
import styles from './generic.css';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getAdmin } from '../../../redux/admin/actions';
import giphy from '../../Resources/Images/giphy.gif';
import PropTypes from 'prop-types';

class Landing extends Component {

    componentDidMount() {
		this.props.getAdmin();
    }

    render() {
        const { firstName, lastName } = this.props.admin
        return(
            <Container fluid={true} className="adminContainer">
                <SidePanel></SidePanel>
                <Jumbotron className="col-md-10 fadde-in col-sm-12 col-xs-12 adminLanding">
                    <h1>Welcome Back {firstName + " " +lastName}!</h1>
                    <br/>
                    <img className="flip" src={giphy}/>
                </Jumbotron>
            </Container>
        );
    }
}

Landing.propTypes = {
	getAdmin: PropTypes.func.isRequired,
	admin: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	admin: state.admin.admin
});

export default connect(mapStateToProps, { getAdmin })(Landing);
