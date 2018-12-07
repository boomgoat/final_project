import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './jl.css';
import { connect } from 'react-redux';
import { fetchServices } from '../../../redux/services/actions';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap'; 


class ServiceListing extends Component {

    state = {}

    componentDidMount() {
		this.props.fetchServices();
	}

    render() {
        const { services } = this.props
        return (
            <div className="jumbotron fade-in-slow text-left mainFeed col-md-8">
                <h1 className="feedHeader"> My Job Feed </h1>
                { services.map(({ _id, title, price, description }) => (
                <NavLink className="link fade-in-slow" to="/jobDesc" key={_id}>
                    <Row className="borders">
                        <Col><h2 className="col-md-12 title"><strong>{ title }</strong></h2></Col>
                        <Col className="text-right"><h3 className="col-md-12 budget"><strong className="budg">Price:</strong> { price } Points</h3></Col>
                        <Col md={12}><p className="col-md-12 desc">{ description }</p></Col>
                    </Row>
                </NavLink>
                ))}
            </div>
        )
    }
}

ServiceListing.propTypes = {
	fetchServices: PropTypes.func.isRequired,
	services: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	services: state.services
});

export default connect(mapStateToProps, { fetchServices })(ServiceListing);