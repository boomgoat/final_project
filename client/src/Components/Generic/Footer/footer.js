import React, { Component } from 'react';
import styles from './footer.css';
import logo from "../../Resources/Logo/Icon.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="col-md-12 foot">
          <div className="col-md-3 col-sm-3 text-left hidden-xs">
            <ul className="footerList">
              <li><h4>Pricing</h4></li>
              <li><h4>Favor Coins</h4></li>
              <li><h4>Partners</h4></li>
              <li><h4>FAQs</h4></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 text-left hidden-xs">
            <ul className="footerList">
            <li><h4>Home</h4></li>
            <li><h4>Tutorials</h4></li>
            <li><h4>Join Us</h4></li>
            </ul>
          </div>
          <div className="base col-md-6 col-sm-6 col-xs-12 text-left">
            <h3>Connect with us</h3>
            <input className="subscribe col-md-7 col-sm-7 col-xs-12" placeholder="Enter Email"/> 
            <button className="buttn col-md-3 col-sm-6 col-xs-12" type="button">SUBSCRIBE</button>
            <div className="col-md-12 col-sm-12 col-xs-12">
            <i className="fa fa-github col-md-3 col-sm-3 col-xs-3"></i>
            <i className="fa fa-twitter-square col-md-3 col-sm-3 col-xs-3"></i>
            <i className="fa fa-facebook-square col-md-3 col-sm-3 col-xs-3"></i>
            <i className="fa fa-instagram col-md-3 col-sm-3 col-xs-3"></i>
            </div>
          </div>
          <div className="footerBase col-md-12 col-sm-12 col-xs-12">
            <img className="logo col-md-4 col-lg-3 col-sm-3 col-xs-4" src = { logo } alt="logo"/>
            <div className="col-md-1 col-sm-1 col-xs-3 baseLineText">
              Legal
            </div>
            <div className="col-md-1 col-sm-1 col-xs-3 baseLineText">
              Privacy
            </div>
            <div className="col-md-1 col-sm-1 col-xs-3 baseLineText">
              Cookies
            </div>
            <div className="col-md-6 col-sm-6 col-xs-4 text-left baseLineText">
            &copy;2018 Squaberry. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;