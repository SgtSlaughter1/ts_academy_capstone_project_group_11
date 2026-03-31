import React from 'react';
import PlanetGallery from './PlanetGallery';
import './PlanetCard.css';

const PlanetCard = ({ planet, distanceFromSun, image }) => {

  return (
    <div className="planet-card">
      <figure className="image-container">
        <img
          src={imageUrl}
          alt={planet.name} 
          className="planet-image"
        /> 
      </figure>

      <div className="card-content">
        <h3 className="planet-name">{planet.Planet}</h3>
        <p className="planet-distance">{planet.distanceFromSun} million km</p>
      </div>
    </div>
  );
};

export default PlanetCard;

    