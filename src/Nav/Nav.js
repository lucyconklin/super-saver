import React, { Component } from 'react';
import './Nav.css';
import logo from '../logo.svg';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" className="logo"/>
              </a>
              <ul className="navbar-nav nav">
                <li>Coupons</li>
                <li>About</li>
                <li>Mailing Areas</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>
                </li>
              </ul>
              <p className="navbar-text navbar-right pull-right">Signed in as
                <a href="#" className="navbar-link"> Lucy Conklin</a>
              </p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
