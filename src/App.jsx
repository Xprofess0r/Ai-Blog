import React from 'react';
import HeaderHero from './components/Header';
import GallerySection from './components/Blog';
import Pagination from './components/Pagination';
import SidebarSection from './components/PopularPost';
import Footer from './components/Footer';
import SlideshowGallery from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components

function App() {
  return (
    <Router> {/* Wrap everything inside the Router */}
      <div>
        <HeaderHero />
        <Routes>
          <Route path="/" element={<SlideshowGallery />} /> {/* Route for slideshow gallery */}
          {/* You can add other routes here */}
        </Routes>
        <GallerySection />
        <Pagination />
        <SidebarSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
