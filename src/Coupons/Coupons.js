import React, { Component } from 'react';
import './Coupons.css';
import Coupon from '../Coupon/Coupon'

const numbers = [1,2,3,4,5,6,7,8]

const couponItems = numbers.map((number) =>
  <Coupon url={ '../img/coupons/' + number + '.jpg' } />
);

class Coupons extends Component {
  render() {
    return (
      <div className="Coupons">
        <div className="container">
          <h2>Coupons</h2>
          <div className="dashed-line"></div>
          <div className="row">
            { couponItems }
          </div>
        </div>
      </div>
    );
  }
}

export default Coupons;
