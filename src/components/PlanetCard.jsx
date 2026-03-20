import React from 'react';

const PlanetCard = () => {
  return (
    <figure className="planet-card">
    <div className="planet-images">
      <img src="../images/mercury.jpg" alt="Mercury"/>
      <img src="../images/venus.webp" alt="Venus"/>
      <img src="../images/earth.jpg" alt="Earth"/>
      <img src="../images/mars.webp" alt="Mars"/>
      <img src="../images/jupiter.webp" alt="Jupiter"/>
      <img src="../images/saturn.webp" alt="Saturn"/>
      <img src="../images/uranus.webp" alt="Uranus"/>
      <img src="../images/neptune.webp" alt="Neptune"/>
      <img src="../images/pluto.webp" alt="Pluto"/>
    </div>
    </figure>
    
  );
};

export default PlanetCard;





// API Data
// // [
//     // {
//         "planet": "Mercury",
//         "distanceFromSun": 57.9,
//         "image": "../images/mercury.jpg"
//     },
//     {
//         "planet": "Venus",
//         "distanceFromSun": 108.2,
//         "image": "../images/venus.webp"
//     },
//     {
//         "planet": "Earth",
//         "distanceFromSun": 149.6,
//         "image": "../images/earth.jpg"
//     },
//     {
//         "planet": "Mars",
//         "distanceFromSun": 227.9,
//         "image": "../images/mars.webp"
//     },
//     {
//         "planet": "Jupiter",
//         "distanceFromSun": 778.6,
//         "image": "../images/jupiter.webp"
//     },
//     {
//         "planet": "Saturn",
//         "distanceFromSun": 1433.5,
//         "image": "../images/saturn.webp"
//     },
//     {
//         "planet": "Uranus",
//         "distanceFromSun": 2872.5,
//         "image": "../images/uranus.webp"
//     },
//     {
//         "planet": "Neptune",
//         "distanceFromSun": 4495.1,
//         "image": "../images/neptune.webp"
//     },
//     {
//         "planet": "Pluto",
//         "distanceFromSun": 5906.4,
//         "image": "../images/pluto.webp"
//     }
// ]