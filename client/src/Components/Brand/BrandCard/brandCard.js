import React, { Component } from 'react';
import styles from './bc.css';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getBrand } from '../../../redux/brands/actions';
import PropTypes from 'prop-types';

import pp from '../../Resources/Images/dingus.jpg';


class BrandCard extends Component {
    componentDidMount() {
		this.props.getBrand();
    }
    render() {
        const { brandName } = this.props
        console.log(this.props)
        return(
            <Container fluid={true} className="dash">
                    <Jumbotron className="col-md-2 col-md-offset-1 fade-in profileCard">
                        <img src={pp} className="pp col-md-6" alt="profile-picture"/>
                        <div className="col-md-6 text-left">
                            <h2 className="adminName">{brandName}</h2>
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
	getBrand: PropTypes.func.isRequired,
	brand: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	brand: state.brand
});

export default connect(mapStateToProps, { getBrand })(BrandCard);