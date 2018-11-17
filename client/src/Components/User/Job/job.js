import React, { Component } from 'react';
import styles from './job.css';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';



class Job extends Component {
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
                        <button className="butn">Place Bid</button>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Job