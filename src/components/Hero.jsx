import React, { useState } from 'react';
import { slides, thumbnails } from '../constant/index'; // Import both constants
import { useNavigate } from 'react-router-dom'; // For redirection

const SlideshowGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Start from the first image
  const [inputValue, setInputValue] = useState(''); // To store the form input value
  const [isSignupOpen, setIsSignupOpen] = useState(false); // Toggle the signup/sign-in card
  const [isSignIn, setIsSignIn] = useState(true); // To toggle between Sign In and Sign Up
  const [showPassword, setShowPassword] = useState(false); // To toggle the password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // To toggle confirm password visibility
  const navigate = useNavigate(); // For navigation

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) =>
      prevIndex + n < 0
        ? slides.length - 1
        : (prevIndex + n) % slides.length
    );
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open signup/signin card on form submit
    setIsSignupOpen(true);
  };

  const closeSignup = () => {
    setIsSignupOpen(false);
  };

  const toggleForm = () => {
    setIsSignIn((prev) => !prev); // Toggle between Sign In and Sign Up
  };

  return (
    <div>
      {/* Blur background when signup is open */}
      <div className={`container relative ${isSignupOpen ? 'filter blur-sm' : ''}`}>
        {/* Display the current slide */}
        <div className="mySlides">
          <div className="numbertext">
            {`${slideIndex + 1} / ${slides.length}`}
          </div>
          <img
            src={slides[slideIndex].image}
            alt={slides[slideIndex].title}
            className="relative"
          />

          {/* Form in the center of the image */}
          <div className="absolute inset-0 flex justify-center items-center">
          <form
  className="bg-white p-2 rounded-lg shadow-lg flex flex-col sm:flex-row w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto justify-between items-center"
  onSubmit={handleSubmit}
>
  <input
    type="text"
    placeholder="Write a Travel blog on Italy..."
    className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto flex-grow mb-2 sm:mb-0 sm:mr-4 outline-none"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
  <button
    type="submit"
    className="bg-black hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto"
  >
    📝 Generate Blog
  </button>
</form>

          </div>
        </div>

        {/* Next and Previous Buttons */}
        <a className="prev" onClick={() => plusSlides(-1)}></a>
        <a className="next" onClick={() => plusSlides(1)}></a>

        {/* Caption */}
        <div className="caption-container">
          <p>{slides[slideIndex].title}</p>
        </div>

        {/* Thumbnails */}
        <div className="row">
          {thumbnails.map((thumbnail, index) => (
            <div
              className="column"
              key={index}
              onClick={() => currentSlide(index)}
            >
              <img
                className={slideIndex === index ? 'active' : ''}
                src={thumbnail.image}
                alt={thumbnail.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Signup/Sign-in modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl shadow-lg">
            <button
              className="absolute top-4 right-4 text-black font-bold text-xl"
              onClick={closeSignup}
            >
              ✖
            </button>

            {/* Conditional rendering based on SignIn/SignUp */}
            {isSignIn ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Sign In</h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2 text-sm font-medium">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="Enter your password"
                    />
                    <span
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
                  >
                    Sign In
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                  Don't have an account?{' '}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline"
                  >
                    Create an account
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Username</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Phone Number</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2 text-sm font-medium">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="Enter your password"
                    />
                    <span
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="border border-gray-300 rounded-lg p-2 w-full"
                      placeholder="Confirm your password"
                    />
                    <span
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? '🙈' : '👁️'}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                  Already have an account?{' '}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideshowGallery;
