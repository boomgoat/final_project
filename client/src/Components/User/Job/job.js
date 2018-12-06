import React, { Component } from 'react';
import styles from './job.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Job extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }

      
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


    render() {
        return(
            <div className="container-fluid backgroundColor">
                <div className="jumbotron jobs col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <Row>
                        <h1>Title</h1>
                    </Row>
                    <Row>
                        <h3 className="col-md-6 text-left">Job By: ____</h3>
                        <h3 className="col-md-6 text-center">Budget: $x</h3>
                    </Row>
                    <Row>
                        <p className="text-left description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                        </p>
                    </Row>
                    <Row>
                        <button className="butn" onClick={this.toggle}>Place Bid</button>
                    </Row>
                </div>
                <Row className="fadeFix">
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody className="jobs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
                <div className="jumbotron reviews col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <Row>
                        <h1>Reviews</h1>
                    </Row>
                    <Row className="text-justify">
                        <Col className="col-md-2">
                            <h2>Name:</h2>
                            <h2>Rank:</h2>
                        </Col>
                        <Col className="col-md-8">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        </Col>
                        </Row>
                    <Row>
                        <Input type="textarea" className="inputStyles" placeholder="Your Review Here"/>
                    </Row>
                    <Row>
                        <button className="butn">Submit</button>
                    </Row>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    // backdropTransition - controls backdrop transition
    // timeout is 150ms by default to match bootstrap
    // see Fade for more details
    // modalTransition - controls modal transition
    // timeout is 300ms by default to match bootstrap
    // see Fade for more details
    innerRef: PropTypes.object,
  }


export default Job