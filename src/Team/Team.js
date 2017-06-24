import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="row team-container">
            <div className="col-md-3">
              <img src="" className="img-circle" alt="team member 1"/>
              <h4>Team Member</h4>
              <p>CEO</p>
            </div>
            <div className="col-md-3">
              <img src="" className="img-circle" alt="team member 2"/>
              <h4>Team Member</h4>
              <p>CEO</p>
            </div>
            <div className="col-md-3">
              <img src="" className="img-circle" alt="team member 3"/>
              <h4>Team Member</h4>
              <p>CEO</p>
            </div>
            <div className="col-md-3">
              <img src="" className="img-circle" alt="team member 4"/>
              <h4>Team Member</h4>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
