import React from 'react';

const Hero = () => {


  return (
    <section className="hero">
      <div className="logo">
        <img src="/images/solar-system-logo.png" alt="Solar System Logo" />
      </div>
      <h1>
        Exploring Our <em>Solar System</em> Through <i>Data</i>
      </h1>
      <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</p>

      <a href="#factTable"><button className='btn btn-primary'>Explore the Data</button></a>
      <button className='btn btn-secondary'>Contact Us</button>

      <div className="hero-image">
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
