import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ name, distance, imageUrl }) => {
  return (
    <div className="planet-card">
      <figure className="image-container">
        <img src="../images/mercury.jpg" alt="Mercury" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Mercury</h3>
        <p className="planet-distance">57.9</p>
      </div>
      <figure className="image-container">
        <img src="../images/venus.webp" alt="Venus" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Venus</h3>
        <p className="planet-distance">108.2</p>
      </div>
      <figure className="image-container">
        <img src="../images/earth.jpg" alt="Earth" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Earth</h3>
        <p className="planet-distance">149.6</p>
      </div>
      <figure className="image-container">
        <img src="../images/mars.webp" alt="Mars" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Mars</h3>
        <p className="planet-distance">227.9</p>
      </div>
      <figure className="image-container">
        <img src="../images/jupiter.webp" alt="Jupiter" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Jupiter</h3>
        <p className="planet-distance">778.6</p>
      </div>
      <figure className="image-container">
        <img src="../images/saturn.webp" alt="Saturn" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Saturn</h3>
        <p className="planet-distance">1433.5</p>
      </div>
      <figure className="image-container">
        <img src="../images/uranus.webp" alt="Uranus" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Uranus</h3>
        <p className="planet-distance">2872.5</p>
      </div>
      <figure className="image-container">
        <img src="../images/neptune.webp" alt="Neptune" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Neptune</h3>
        <p className="planet-distance">4495.1</p>
      </div>
      <figure className="image-container">
        <img src="../images/pluto.webp" alt="Pluto" className="planet-image"/>
      </figure>
      <div className="card-content">
        <h3 className="planet-name">Pluto</h3>
        <p className="planet-distance">5906.4</p>
      </div>
    </div>
  );
};

export default PlanetCard;
