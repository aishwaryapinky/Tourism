// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Vlog from './Components/Vlog';
import Contact from './Components/Contact';
import ForYou from './Components/ForYou';
import Navbar from './Navbar';
import './Styles/Navbar.css';
import './App.css';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vlog" element={<Vlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/foryou" element={<ForYou />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
