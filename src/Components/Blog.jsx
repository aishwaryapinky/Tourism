// src/components/Blog.js
import React, { useState } from 'react';
import '../Styles/Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Exploring the Wonders of the World',
    content: 'Discover the most amazing places on earth...',
  },
  {
    id: 2,
    title: 'Top 10 Travel Tips',
    content: 'Here are some essential tips for your next adventure...',
  },
  {
    id: 3,
    title: 'Best Budget Travel Destinations',
    content: 'Traveling on a budget? Check out these affordable destinations...',
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-preview" onClick={() => handlePostClick(post)}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="blog-details">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => setSelectedPost(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
