import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Best Tour Places</div>
      <div className={`navbar-links ${isMobile ? 'mobile-menu' : ''}`}>
      <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/services"  onClick={toggleMobileMenu}>Services</Link></li>
        <li><Link to="/blog"  onClick={toggleMobileMenu}>Blog</Link></li>
        <li><Link to="/vlog"  onClick={toggleMobileMenu}>Vlog</Link></li>
        <li><Link to="/contact"  onClick={toggleMobileMenu}>Contact</Link></li>
        <li><Link to="/foryou"  onClick={toggleMobileMenu}>For You</Link></li>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </nav>
  );
};

export default Navbar;
