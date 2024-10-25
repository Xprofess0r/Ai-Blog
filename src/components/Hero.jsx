import React, { useState } from 'react';
import { slides, thumbnails } from '../constant/index'; // Import both constants
import { useNavigate } from 'react-router-dom'; // For redirection

const SlideshowGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Start from the first image
  const [inputValue, setInputValue] = useState(''); // To store the form input value
  const navigate = useNavigate(); // For navigation

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) =>
      prevIndex + n < 0 ? slides.length - 1 : (prevIndex + n) % slides.length
    );
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Sign In page when the form is submitted
    navigate('/login');
  };

  return (
    <div>
      {/* Blur background when signup is open */}
      <div className="container relative">
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
    </div>
  );
};

export default SlideshowGallery;
