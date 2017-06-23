import React, { Component } from 'react';
import './Travel.css';

class Travel extends Component {
  render() {
    return (
      <div className="Travel jumbotron">
        <div className="card-overlay pull-left">
          <h3>Save up to 25% on travel packages to California</h3>
            <button type="button" className="btn-get-the-coupon"><span>Get the coupon</span></button>
        </div>
      </div>
    );
  }
}

export default Travel;
