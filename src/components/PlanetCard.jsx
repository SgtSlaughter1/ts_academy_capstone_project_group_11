import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ name, distance, imageUrl }) => {
  return (
    <div className="planet-card">
      <figure className="image-container">
        <img 
          src={imageUrl} 
          alt={name} 
          className="planet-image"
        />
      </figure>
      <div className="card-content">
        <h3 className="planet-name">{name}</h3>
        <p className="planet-distance">{distance} million km</p>
      </div>
    </div>
  );
};

export default PlanetCard;
