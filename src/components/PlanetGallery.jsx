import React from 'react';
import PlanetCard from './PlanetCard';
import './PlanetGallery.css';

const PlanetGallery = () => {
  const planetData = [
    { name: "Mercury", distance: "57.9", image: "../images/mercury.jpg"},
    { name: "Venus", distance: "108.2", image: "../images/venus.webp"},
    { name: "Earth", distance: "149.6", image: "../images/earth.jpeg"},
    { name: "Mars", distance: "227.9", image: "../images/mars.webp"},
    { name: "Jupiter", distance: "778.6", image: "../images/jupiter.webp"},
    { name: "Saturn", distance: "1433.5", image: "../images/saturn.webp"},
    { name: "Uranus", distance: "2872.5", image: "../images/uranus.webp"},
    { name: "Neptune", distance: "4495.1", image: "../images/neptune.webp"},
    { name: "Pluto", distance: "5906.4", image: "../images/pluto.webp"},
  ];

  return (
    <section className="planet-gallery">
      <div className="gallery-grid">
      <h2 className="gallery-title">Visualizing the Differences Between Planets</h2>
      <p className="gallery-desc">Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestial planets are from gas giants and ice giants.</p>
      </div>
    
      <div className="planet-grid">
        {planetData.map((planet, index) => (
          <PlanetCard
          key={index}
          name={planet.name}
          distance={planet.distance}
          />
        ))}
      </div>
    </section>
  );
};

export default PlanetGallery;
