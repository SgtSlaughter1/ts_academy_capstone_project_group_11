import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import './PlanetGallery.css';

const PlanetGallery = () => {
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://anurella.github.io/json/planets.json')
      .then(response => response.json())
      .then(data => {
    console.log("This is my API data:", data);
        setPlanetData(data);
        setLoading(false);
      })
      .catch((error) => {
    console.error("Error fetching planets:", error);
        setLoading(false);
   });
}, []);

   return (
    <section className="planet-gallery">
      <div className="gallery-grid">
      <h2 className="gallery-title">Visualizing the Differences Between Planets</h2>
      <p className="gallery-desc">Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestial planets are from gas giants and ice giants.</p>
      </div>

      <div className="planet-grid">
        {planetData.map((planet, index) => (
        <PlanetCard 
          key={planet.id}
          planet={planet}
          distanceFromSun={planet.distanceFromSun}
        />
        ))}
      </div>
    </section>
  );
};

export default PlanetGallery;
