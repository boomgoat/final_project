import React, { Component } from 'react';
import SidePanel from '../Generic/sidePanel';
import styles from './messenger.css';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { getAdmin } from '../../../redux/admin/actions';
import PropTypes from 'prop-types';

import pp from '../../Resources/Images/dingus.jpg';


class Messenger extends Component {
    componentDidMount() {
		this.props.getAdmin();
    }
    render() {
        const { firstName, lastName } = this.props.admin
        return(
            <Container fluid={true} className="mess">
                <SidePanel></SidePanel>
                <Jumbotron className="col-md-10 messenger">
                    
                    <Jumbotron className="col-md-3 userCard">
                        <div className="col-md-12 userTags">
                            <img src={pp} className="pp col-md-4" alt="profile-picture"/>
                            <div className="col-md-8">
                            <h2 className="nameTag text-left">John Doe</h2>
                            <p className="messPreview text-left">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </Jumbotron>
                    <Jumbotron className="col-md-8 messageBox">
                        
                    </Jumbotron>
                </Jumbotron>
            </Container>
        );
    }
}

Messenger.propTypes = {
	getAdmin: PropTypes.func.isRequired,
	admin: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	admin: state.admin.admin
});

export default connect(mapStateToProps, { getAdmin })(Messenger);