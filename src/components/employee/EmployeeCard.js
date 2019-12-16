import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <span className="card-petname">Doodles</span></h3>
          <p>John James</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;