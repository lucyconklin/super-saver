import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Company</h4>
              <ul>
                <li>About Super Savers</li>
                <li></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact</h4>
            </div>
          </div>
          <div className="social-icons">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
