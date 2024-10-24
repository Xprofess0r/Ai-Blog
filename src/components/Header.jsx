import React, { useState } from 'react';
import { slides } from '../constant'; // Importing the carousel data

const HeaderHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const toggleBlog = () => {
    setBlogOpen(!blogOpen);
  };

  return (
    <div className="max-w-screen-full sticky top-0 z-50 mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center sticky top-0 p-6 bg-white shadow-md font-sans ">
        {/* Hamburger Menu Button for Mobile (Visible on smaller screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none"
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Centered Logo for Mobile View */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          <div className="text-3xl font-bold">DevBlog</div>
        </div>

        {/* Search Icon - Small Screens */}
        <div className="md:hidden flex items-center">
          <button className="text-black">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Navbar Links for Larger Screens */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase text-gray-600 font-light">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li className="relative group">
            <a href="#" className="hover:text-black flex items-center">
              Categories
              <i className="fas fa-chevron-down ml-1 transform group-hover:rotate-180 transition duration-400"></i>
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-black text-white py-2 mt-2 w-40 rounded-lg shadow-lg z-10 transform translate-y-4 group-hover:translate-y-0">
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Lifestyle</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Health</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Family</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Management</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Travel</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Work</a></li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-black flex items-center">
              Blog
              <i className="fas fa-chevron-down ml-1 transform group-hover:rotate-180 transition duration-300"></i>
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-black text-white py-2 mt-2 w-40 rounded-lg shadow-lg z-10 transform translate-y-4 group-hover:translate-y-0 transition duration-300 ease-out">
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Video Post</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Audio Post</a></li>
              <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Standard Post</a></li>
            </ul>
          </li>
          <li><a href="#" className="hover:text-black">Styles</a></li>
          <li><a href="#" className="hover:text-black">About</a></li>
          <li><a href="#" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Search Icon - Large Screens */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="uppercase text-sm font-light text-gray-500">Search</span>
          <button className="text-black">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-20 p-8">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <button onClick={toggleMenu} className="text-3xl">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="uppercase text-xl font-bold tracking-wide">Navigate To</h3>
            <div></div> {/* Empty div for alignment */}
          </div>

          {/* Menu Items */}
          <ul className="space-y-4 text-lg">
            <li><a href="#" className="hover:text-black">Home</a></li>

            {/* Categories */}
            <li>
              <button
                className="flex items-center justify-between w-full text-left hover:text-black"
                onClick={toggleCategories}
              >
                Categories <i className={`fas ${categoriesOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>
              {categoriesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><a href="#" className="hover:text-black">Lifestyle</a></li>
                  <li><a href="#" className="hover:text-black">Health</a></li>
                  <li><a href="#" className="hover:text-black">Family</a></li>
                  <li><a href="#" className="hover:text-black">Management</a></li>
                  <li><a href="#" className="hover:text-black">Travel</a></li>
                  <li><a href="#" className="hover:text-black">Work</a></li>
                </ul>
              )}
            </li>

            {/* Blog */}
            <li>
              <button
                className="flex items-center justify-between w-full text-left hover:text-black"
                onClick={toggleBlog}
              >
                Blog <i className={`fas ${blogOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>
              {blogOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><a href="#" className="hover:text-black">Video Post</a></li>
                  <li><a href="#" className="hover:text-black">Audio Post</a></li>
                  <li><a href="#" className="hover:text-black">Standard Post</a></li>
                </ul>
              )}
            </li>

            <li><a href="#" className="hover:text-black">Styles</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderHero;
