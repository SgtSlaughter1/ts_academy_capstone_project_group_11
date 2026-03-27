import React from 'react';
import './VideoSection.css';
const VideoSection = () => {
  return (
    <section className="video-section">
      <div className='container'>
          <div>
             <video loop muted autoPlay controls src="./src/assets/video.mp4"></video>
           
          </div>
          <div>
            <h2 className='planetary'>How Planetary Data <br className='mobile' />  Helps Us<br className='hide-on-mobile'/> Understand <br className='mobile'/>  Space</h2>
            <p className='p-1'>Planetary science goes beyond images.<br className='mobile' /> Comparing <span>mass</span>, <span>diameter</span>,<br className='hide-on-mobile'/><span>gravity</span>,<br className='mobile' /> and <span>density</span>, we gain insight into how <br className='mobile' /> planets form, behave,<br className='hide-on-mobile'/> and interact <br className='mobile' /> within the solar system.</p>
          </div>
      </div>
    </section>
  );
};

export default VideoSection;
