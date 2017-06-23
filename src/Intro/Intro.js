import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro jumbotron">
        <div className="card-overlay pull-right">
          <h3>Get one free appetizer with any meal</h3>
          <p>At participating Burgertown locations.</p>
            <button type="button" className="btn-get-the-coupon"><span>Get the coupon</span></button>
        </div>
      </div>
    );
  }
}

export default Intro;
