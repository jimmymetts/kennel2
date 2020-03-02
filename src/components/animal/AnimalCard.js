import React, { Component } from 'react';
import './Animal.css'
import '../Kennel.css'


class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture >
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Doodles</span></h3>
          <p>Breed: Poodle</p>
        </div>
        <div className="card-content">
          <picture >
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Jake</span></h3>
          <p>Breed: Blue Heeler</p>
        </div>
                <div className="card-content">
          <picture >
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Rosie</span></h3>
          <p>Breed: Corgy Mix</p>
        </div>
        <div className="card-content">
        <picture >
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name:<span>Eli</span></h3>
          <p>Breed: Dalmation</p>
          {/* <h3>Name: <span className="card-petname">Eli</span></h3> */}
        </div>
      </div>
 
      
    );
  }
}

export default AnimalCard;