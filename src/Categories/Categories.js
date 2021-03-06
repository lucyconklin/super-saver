import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <div className="container">
          <h1>Categories</h1>
          <div className="dashed-line"></div>
          <ul>
            <li>
              <img src='' alt='' />
              <p>Automotive</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Travel</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Health & Beauty</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Restaurants</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Entertainment</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Pets</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Home</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Kids</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
