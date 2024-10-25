import React from 'react';
import SlideshowGallery from '../components/Hero'; // Your existing slideshow component
import GallerySection from '../components/Blog';  // Your existing gallery section component
import SidebarSection from '../components/PopularPost'; // Popular posts section
import Pagination from '../components/Pagination';  // Pagination for blogs

const HomePage = () => {
  return (
    <div>
      {/* Slideshow or Hero Section */}
      <SlideshowGallery />
      
      {/* Blog or Gallery Section */}
      <GallerySection />
      
      {/* Popular Posts Sidebar */}
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-6">Latest Blogs</h2>
          <Pagination />  {/* Pagination for blog listing */}
        </div>
        <SidebarSection />  {/* Sidebar with popular posts and categories */}
      </div>
    </div>
  );
};

export default HomePage;
