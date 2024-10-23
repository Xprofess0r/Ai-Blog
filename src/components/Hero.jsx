import React, { useState } from 'react';
import { slides, thumbnails } from '../constant/index'; // Import both constants

const SlideshowGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Start from the first image

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

  return (
    <div>
      <div className="container">
        {/* Display the current slide */}
        <div className="mySlides">
          <div className="numbertext">
            {`${slideIndex + 1} / ${slides.length}`}
          </div>
          <img
            src={slides[slideIndex].image}
            alt={slides[slideIndex].title}
          />
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
