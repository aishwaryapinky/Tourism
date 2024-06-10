// src/components/Services.js
import React from 'react';
import '../Styles/Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        We offer a variety of services to make your travel experience unforgettable.
      </p>
      <div className="services-list">
        <div className="service-item">
          <h2>Custom Travel Planning</h2>
          <p>
            Our experts will help you plan the perfect trip tailored to your preferences.
          </p>
        </div>
        <div className="service-item">
          <h2>Accommodation Booking</h2>
          <p>
            We provide booking services for a wide range of accommodations to suit every budget.
          </p>
        </div>
        <div className="service-item">
          <h2>Guided Tours</h2>
          <p>
            Enjoy guided tours by local experts to make the most of your trip.
          </p>
        </div>
        <div className="service-item">
          <h2>Travel Insurance</h2>
          <p>
            We offer comprehensive travel insurance plans for your peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
