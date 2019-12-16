import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <span className="card-petname">Jane James</span></h3>
          <p>500 Pet Way</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;