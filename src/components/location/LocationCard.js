import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <span className="card-petname">Nashville</span></h3>
          <p>500 Pet Way</p>
          <h3>Name: <span className="card-petname">Franklin</span></h3>
          <p>650 WSM Way</p>
          <h3>Name: <span className="card-petname">Knoxville</span></h3>
          <p>125 Cumberland Dr</p>
          <h3>Name: <span className="card-petname">Hendersonville</span></h3>
          <p>333 River</p>
          <h3>Name: <span className="card-petname">Louisville</span></h3>
          <p>Route 6 Box 242</p>
          Route 6 Box 242
          <h3>Name: <span className="card-petname">Newton></span></h3>
          <p>232 Hwy 43</p>
          <h3>Name: </h3>
          <p>232 Hwy 43</p>

        </div>
      </div>
    );
  }
}

export default LocationCard;