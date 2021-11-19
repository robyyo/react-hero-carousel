import React, { useState, useEffect } from "react";
import "./Hero-Carousel.css";

const HeroCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [numSlides] = useState(3);

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 5000);
    return () => {
      clearInterval(changeSlide);
    };
  }, [slideIndex]);

  if (slideIndex > numSlides) {
    setSlideIndex(1);
  }

  if (slideIndex < 1) {
    setSlideIndex(3);
  }

  return (
    <div className="hero-wrapper">
      <div className="slideshow-container">
        <div
          className={`${
            slideIndex === 1 ? "slide-active" : "slide-initial"
          } fade slide`}
        >
          <div className="img-overlay">
            <img
              src="https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="slide 1"
            />
          </div>
          <div className="cta-container">
            <h1>Some exciting text to make you click</h1>
            <button className="cta-btn">CTA</button>
          </div>
        </div>
        <div
          className={`${
            slideIndex === 2 ? "slide-active" : "slide-initial"
          } fade slide`}
        >
          <div className="img-overlay">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
              alt="slide 1"
            />
          </div>
          <div className="cta-container">
            <h1>Some exciting text to make you click</h1>
            <button className="cta-btn">CTA</button>
          </div>
        </div>
        <div
          className={`${
            slideIndex === 3 ? "slide-active" : "slide-initial"
          } fade slide`}
        >
          <div className="img-overlay">
            <img
              src="https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
              alt="slide 1"
            />
          </div>
          <div className="cta-container">
            <h1>Some exciting text to make you click</h1>
            <button className="cta-btn">CTA</button>
          </div>
        </div>
        <div className="prev-container">
          <button
            className="prev"
            onClick={() => {
              setSlideIndex(slideIndex - 1);
            }}
          >
            &#10094;
          </button>
        </div>
        <div className="next-container">
          <button
            className="next"
            onClick={() => {
              setSlideIndex(slideIndex + 1);
            }}
          >
            &#10095;
          </button>
        </div>
        <div className="dot-container">
          <span className={`${slideIndex === 1 ? "active" : ""} dot`}></span>
          <span className={`${slideIndex === 2 ? "active" : ""} dot`}></span>
          <span className={`${slideIndex === 3 ? "active" : ""} dot`}></span>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
