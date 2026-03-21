import React from 'react';
import "./Hero.css";

const Hero = () => {


  return (
    <section className="hero">
      <div className="logo">
        <img src="/src/assets/logo-rem.png" alt="Solar System Logo" />
      </div>

      <div className='flex'>
      <div className="content">
        <h1>
          Exploring Our <em>Solar System</em> Through <i>Data</i>
        </h1>
        <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</p>

        <a href="#factTable"><button className='btn btn-primary'>Explore the Data</button></a>
        <button className='btn btn-secondary'>Contact Us</button>
      </div>

      <div className="hero-image">
        <img src="/src/assets/hero_imagerem.png" alt="an image of a Planet" />
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
