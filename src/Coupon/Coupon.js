import React, { Component } from 'react';
import './Coupon.css';

class Coupon extends Component {
  render() {
    return (
      <div className="Coupon col-md-3">
        <div className="coupon-container">
          <div className="thumbnail">
            <img src={ this.props.url } alt="coupon image"/>
          </div>
          <h4>Save 50% on items</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...</p>
          <div className="center">
            <button className="coupon-button">Get the Coupon</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Coupon;
