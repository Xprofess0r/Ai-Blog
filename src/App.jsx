import React from 'react';
import HeaderHero from './components/Header';
import GallerySection from './components/Blog';
import Pagination from './components/Pagination';
import SidebarSection from './components/PopularPost';
import Footer from './components/Footer';
import SlideshowGallery from './components/Hero';

function App() {
  return (
    <div>
      <HeaderHero />
      <SlideshowGallery/>
      <GallerySection/>
      <Pagination />
      <SidebarSection />
      <Footer />
    </div>
  );
}

export default App;
