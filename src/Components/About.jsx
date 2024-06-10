
// src/components/About.js
import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Best Tour Places</h1>
      <p>
        Welcome to Best Tour Places, your ultimate guide to discovering the most amazing
        destinations around the world. Our mission is to help you find the perfect places
        to visit and explore.
      </p>

      <h2>Our Team</h2>
      <p>
        We are a group of travel enthusiasts who have visited countless destinations and
        are eager to share our experiences and tips with you. Our team is dedicated to
        providing you with the most accurate and up-to-date information.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>In-depth guides to top travel destinations</li>
        <li>Travel tips and recommendations</li>
        <li>Personalized travel itineraries</li>
        <li>User reviews and ratings</li>
      </ul>
    </div>
  );
};

export default About;
