import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetGallery = () => {
  const planetData = [
    { name: "Mercury", distance: "57.9", imageUrl: mercuryImage},
    { name: "Venus", distance: "108.2", imageUrl: venusImage},
    { name: "Earth", distance: "149.6", imageUrl: earthImage},
    { name: "Mars", distance: "227.9", imageUrl: marsImage},
    { name: "Jupiter", distance: "778.6", imageUrl: jupiterImage},
    { name: "Saturn", distance: "1433.5", imageUrl: saturnImage},
    { name: "Uranus", distance: "2872.5", imageUrl: uranusImage},
    { name: "Neptune", distance: "4495.1", imageUrl: neptuneImage},
    { name: "Pluto", distance: "5906.4", imageUrl: plutoImage},
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
          imageUrl={planet.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PlanetGallery;
