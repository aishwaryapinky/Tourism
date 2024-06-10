// src/components/ForYou.js
import React from 'react';
import '../Styles/ForYou.css';
import Bali from '../Images/balibeach.jpg';
import Swiss from '../Images/swissalps.jpg';
import Rome from '../Images/rome.jpg';
import Ayodhya from '../Images/ayodhya.webp'

const ForYou = () => {
  // Sample data for personalized recommendations
  const recommendations = [
    {
      title: 'Explore the Beaches of Bali',
      description: 'Experience the stunning beaches, vibrant nightlife, and rich culture of Bali.',
      Image: Bali,
    },
    {
      title: 'Adventure in the Swiss Alps',
      description: 'Enjoy breathtaking views and thrilling adventures in the Swiss Alps.',
      Image: Swiss,
    },
    {
      title: 'Discover the History of Rome',
      description: 'Visit the historic landmarks and indulge in the delicious cuisine of Rome.',
      Image: Rome,
    },
    {
      title: 'Discover the History of Ayodhya',
      description: 'Visit the historic landmarks and indulge History of Lord Rama.',
      Image: Ayodhya,
    }
  ];

  return (
    <div className="foryou-container">
      <h1>Personalized Recommendations For You</h1>
      <div className="recommendations">
        {recommendations.map((recommendation, index) => (
          <div className="recommendation" key={index}>
            <img src={recommendation.Image} alt={recommendation.title} />
            <h2>{recommendation.title}</h2>
            <p>{recommendation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYou;
