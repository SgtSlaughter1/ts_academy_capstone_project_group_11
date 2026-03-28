import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Our Team</h3>
          <p className="team-description">
            We are a passionate team of developers dedicated to exploring the wonders of our solar system. 
            This project was created as part of the TS Academy Capstone Project, showcasing our skills in React, 
            API integration, and responsive design.
          </p>
          <div className="team-members">
            <p><strong>Team Members:</strong> Habeeb A., Lawrence A.D., Joshua, ⁠Temiloluwa B, Chukwudi F.M, Temiloluwa A.D, Dustan C.O,  and Oluwatosin R.O</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#planets">Planets</a></li>
            <li><a href="#facts">Facts</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Team Profiles Section */}
        <div className="footer-profiles">
          <h3>Connect With Us</h3>
          <ul className="profile-links">
            <li>
              <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer">
                Amaka's GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">
                Ifeoma's LinkedIn
              </a>
            </li>
            <li>
              <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">
                TS Academy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Group Info */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Planet Explorer. All rights reserved.</p>
          <p>
            Group Name: <a href="https://github.com/SgtSlaughter1/ts_academy_capstone_project_group_11" target="_blank" rel="noopener noreferrer">TS Academy Capstone Group 11</a>
          </p>
          <p className="group-members">Created by: Habeeb A., Lawrence A.D., Joshua, ⁠Temiloluwa B, Chukwudi F.M, Temiloluwa A.D, Dustan C.O,  and Oluwatosin R.O</p>
        </div>
      </div>
    </footer>
  );
};
  

export default Footer;
