import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <div className="container">
          <h1>Categories</h1>
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
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
