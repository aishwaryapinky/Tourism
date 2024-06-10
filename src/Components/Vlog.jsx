// src/components/Vlog.js
import React, { useState } from 'react';
import '../Styles/Vlog.css';

const vlogPosts = [
  {
    id: 1,
    title: 'Adventures in the Amazon',
    content: 'Join us as we explore the lush rainforests of the Amazon...',
  },
  {
    id: 2,
    title: 'A Day in Tokyo',
    content: 'Experience the vibrant life of Tokyo through our lens...',
  },
  {
    id: 3,
    title: 'Sahara Desert Expedition',
    content: 'Witness the vastness of the Sahara desert with our team...',
  },
];

const Vlog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="vlog-container">
      <h1>Our Vlog</h1>
      <div className="vlog-list">
        {vlogPosts.map((post) => (
          <div key={post.id} className="vlog-preview" onClick={() => handlePostClick(post)}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="vlog-details">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => setSelectedPost(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Vlog;

