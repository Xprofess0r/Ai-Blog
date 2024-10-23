import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About DevBlog</h3>
          <hr className="border-gray-500 mb-4 w-16" />
          <p className="text-gray-300">
            Fugiat quas eveniet voluptatem natus. Placeat error temporibus magnam sunt optio aliquam. Ut ut occaecati placeat at. Fuga fugit ea autem. Dignissimos voluptate repellat occaecati minima dignissimos mollitia consequatur.
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Newsletter</h3>
          <hr className="border-gray-500 mb-4 w-16" />
          <p className="text-gray-300">
            Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem.
          </p>
          <div className="flex mt-6">
            <div className="flex items-center bg-gray-800 rounded-l-lg px-3 py-2">
              <i className="fas fa-envelope text-white"></i>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 w-full bg-gray-800 text-white placeholder-gray-400 rounded-none"
            />
            <button className="p-2 bg-black text-white rounded-r-lg">Send</button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex justify-center space-x-6">
        <a href="#" className="text-white hover:text-gray-400 text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl"><i className="fab fa-youtube"></i></a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl"><i className="fab fa-pinterest"></i></a>
      </div>

      {/* Footer Copyright */}
      <p className="text-center mt-8 text-gray-400">
        Copyright ©2024 All rights reserved | This template is made with ❤️ by <a href="#" className="text-white">Colorlib</a>
      </p>
    </footer>
  );
};

export default Footer;
