import React, { Component } from 'react';
import './Coupon.css';

class Coupon extends Component {
  render() {
    return (
      <div className="Coupon col-md-3">
        <div className="coupon-container">
          <p>{ this.props.url }</p>
        </div>
      </div>
    );
  }
}

export default Coupon;
