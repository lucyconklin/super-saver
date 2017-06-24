import React, { Component } from 'react';
import './Footer.css';
import tgLogo from '../img/tg-logo-dk.png'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Company</h4>
              <ul>
                <li>Home</li>
                <li>About Super Savers</li>
                <li>Coupons</li>
                <li>Newsletter</li>
                <li>Testimonials</li>
                <li>Advertise</li>
                <li>Staff</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact</h4>
              <ul>
                <li><strong>Super Saver Coupons</strong></li>
                <li>4075 Evans to Locks Rd</li>
                <li>Evans, GA 30809</li>
                <li><strong>Phone:</strong> (706) 731-8415</li>
                <li><strong>Fax:</strong> (706) 738-5477</li>
                <li><strong>Email:</strong> info@supersavercoupon.com</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Mobile App</h4>
              <p>
                We have a mobile app! <strong>Download here</strong>
              </p>
            </div>
          </div>
          <div className="social-icons">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4 tg-logo">
              <h4>Proudly produced by: </h4>
              <img src={ tgLogo } alt="Tranter Grey Logo" width="200px"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
