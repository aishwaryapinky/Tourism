import React from 'react';
import '../Styles/Home.css';
import Logo from '../Images/tour.jpg'; // Ensure you have a logo image in the specified path

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo-container">
        <img src={Logo} alt="Best Tour Places" className="logo" />
      </div>
      <div className="description-container">
        <h1>Welcome to Best Tour Places</h1>
        <p>
          Your ultimate guide to discovering the most amazing destinations around the world.
          We are dedicated to helping you find the perfect places to visit and explore.
          Whether you're seeking adventure, relaxation, or cultural experiences, we have
          something for everyone. Join us on a journey to uncover the wonders of the world!
        </p>
      </div>
    </div>
  );
};

export default Home;