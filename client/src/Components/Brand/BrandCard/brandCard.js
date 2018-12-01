import React, { Component } from 'react';
import styles from './bc.css';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getAdmin } from '../../../redux/admin/actions';
import PropTypes from 'prop-types';

import pp from '../../Resources/Images/dingus.jpg';


class BrandCard extends Component {
    componentDidMount() {
		this.props.getAdmin();
    }
    render() {
        return(
            <Container fluid={true} className="dash">
                    <Jumbotron className="col-md-2 col-md-offset-1 fade-in profileCard">
                        <img src={pp} className="pp col-md-6" alt="profile-picture"/>
                        <div className="col-md-6 text-left">
                            <h2 className="adminName">hell</h2>
                        </div>
                    </Jumbotron>
                    <div className="col-md-8 stats">
                    <Jumbotron className="col-md-12 text-left fade-in-slow graph">
                    <h2>Job Stats</h2>
                    </Jumbotron>
                    <Jumbotron className="col-md-12 text-left fade-in-slow graph">
                    <h2>Ad Reception</h2>
                    </Jumbotron>
                    </div>
                    <div className="col-md-8 col-md-offset-3">
                    <Jumbotron className=" text-left fade-in-slow graph">
                    <h2>Activity</h2>
                    </Jumbotron>
                    </div>
            </Container>
        );
    }
}

BrandCard.propTypes = {
	getAdmin: PropTypes.func.isRequired,
	admin: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	admin: state.admin.admin
});

export default connect(mapStateToProps, { getAdmin })(BrandCard);