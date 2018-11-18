import React, { Component } from 'react';
import SidePanel from '../Generic/sidePanel';
import styles from './dashboard.css';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getAdmin } from '../../../redux/admin/actions';
import PropTypes from 'prop-types';

import pp from '../../Resources/Images/dingus.jpg';


class Dashboard extends Component {
    componentDidMount() {
		this.props.getAdmin();
    }
    render() {
        const { firstName, lastName } = this.props.admin
        return(
            <Container fluid={true} className="dash">
                <SidePanel></SidePanel>
                <Jumbotron className="col-md-10 dashboard">
                    <Jumbotron className="col-md-4 profileCard">
                        <img src={pp} className="pp col-md-6" alt="profile-picture"/>
                        <div className="col-md-6 text-left">
                            <h2 className="adminName">{firstName + " " +lastName}</h2>
                        </div>
                    </Jumbotron>
                    <div className="col-md-8 stats">
                    <Jumbotron className="col-md-12 graph">
                    </Jumbotron>
                    <Jumbotron className="col-md-12 graph">
                    </Jumbotron>
                    </div>
                    <Jumbotron className="col-md-12 graph">
                    </Jumbotron>
                </Jumbotron>
            </Container>
        );
    }
}

Dashboard.propTypes = {
	getAdmin: PropTypes.func.isRequired,
	admin: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	admin: state.admin.admin
});

export default connect(mapStateToProps, { getAdmin })(Dashboard);