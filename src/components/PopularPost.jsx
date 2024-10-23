import React from 'react';
import { popularPosts } from '../constant/index'; // Import popular posts from constants

const SidebarSection = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 my-12 px-4 md:px-8"> 
      {/* Added px-4 for small screens and px-8 for medium and larger screens */}

      {/* Popular Posts */}
      <div className="md:col-span-2">
        <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Popular Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <a href="#" className="font-semibold hover:underline">
                  {post.title}
                </a>
                <p className="text-sm text-gray-500">
                  By {post.author} on {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="md:col-span-1">
        <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Categories</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Lifestyle</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Travel</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Recipes</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Management</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Health</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Creativity</a></li>
        </ul>
      </div>

      {/* Site Links */}
      <div className="md:col-span-1">
        <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Site Links</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Home</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Blog</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Styles</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">About</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Contact</a></li>
          <li className="border-b border-gray-300 pb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarSection;
