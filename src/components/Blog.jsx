import React from 'react';
import { galleryImages } from '../constant/index'; // Import the data from constant

const GallerySection = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-wrap -mx-4">
        {galleryImages.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="relative overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <a href="#!" className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </a>
              <div className="p-6">
                <span className="text-xs font-medium text-blue-600 uppercase">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold mt-2 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;