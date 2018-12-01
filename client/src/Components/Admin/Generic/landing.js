import React, { Component } from 'react';
import SidePanel from '../Generic/sidePanel';
import styles from './generic.css';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getAdmin } from '../../../redux/admin/actions';
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
                    <h2 className="updateText"><span className="bold">Todays Updates:</span></h2>
                    <br/>
                    <h3><span className="bold">34</span> new accounts</h3>
                    <h3><span className="bold">26</span> new complaints</h3>
                    <h3><span className="bold">3</span> new jobs</h3>
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
