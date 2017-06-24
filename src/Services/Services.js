import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <div className="container">
          <h2>Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-container">
              <i className="fa fa-snowflake-o fa-5x" aria-hidden="true"></i>
                <h3>Design</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-container">
                <i className="fa fa-grav fa-5x" aria-hidden="true"></i>
                <h3>Advertising</h3>
                <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim spernatur aut odit aut fugit, voluptatem sequi nesciunt.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-container">
              <i className="fa fa-telegram fa-5x" aria-hidden="true"></i>
                <h3>Commercial</h3>
                <p>Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
