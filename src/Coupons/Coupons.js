import React, { Component } from 'react';
import './Coupons.css';
import Coupon from '../Coupon/Coupon'
import img1 from '../img/coupon/1.jpg'
import img2 from '../img/coupon/2.jpg'
import img3 from '../img/coupon/3.jpg'
import img4 from '../img/coupon/4.jpg'
import img5 from '../img/coupon/5.jpg'
import img6 from '../img/coupon/6.jpg'
import img7 from '../img/coupon/7.jpg'
import img8 from '../img/coupon/8.jpg'

const numbers = [img1,img2,img3,img4,img5,img6,img7,img8]

const couponItems = numbers.map((number) =>
  <Coupon url={ number } />
);

class Coupons extends Component {
  render() {
    return (
      <div className="Coupons">
        <div className="container">
          <div className="row">
            { couponItems }
          </div>
        </div>
      </div>
    );
  }
}

export default Coupons;
