import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <span className="card-petname">Doodles</span></h3>
          <p>John James</p>
          <h3>Name: <span className="card-petname">Jake</span></h3>
          <p>Robert Clark</p>
          <h3>Name: <span className="card-petname">Rosie</span></h3>
          <p>Ron Mac</p>
          <h3>Name: <span className="card-petname">Pebbles</span></h3>
          <p>Carol Carr</p>
          <h3>Name: <span className="card-petname">Theo</span></h3>
          <p>John Wallace</p>
          <h3>Name: <span className="card-petname">Toby</span></h3>
          <p>Jim Roberts</p>
          <h3>Name: <span className="card-petname">Duke</span></h3>
          <p>John Wayne</p>
          <h3>Name: <span className="card-petname">Buster</span></h3>
          <p>Doug Crowell</p>
          
        </div>
      </div>
    );
  }
}

export default EmployeeCard;