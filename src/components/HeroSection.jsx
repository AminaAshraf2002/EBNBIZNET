import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import image1 from '../assets/hero.jpg'
import image2 from '../assets/HERO2.jpg'
import image3 from '../assets/HERO4.jpg'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Promote Your Business for FREE – Zero Cost, Zero Risk, only smart work. ",
      subtitle: "Your Gateway to Global Business Success",
      description: "Join thousands of businesses expanding their reach worldwide",
      image: image1
    },
    {
      title: "Innovative Digital Solutions",
      subtitle: "Cutting-edge Tools for Modern Business",
      description: "Leverage our platform to boost your online presence",
      image: image2
    },
    {
      title: "Connect with Global Markets",
      subtitle: "Expand Your Business Horizons",
      description: "Access new markets and opportunities worldwide",
      image: image3
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      
      <div 
        className="hero-slider" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-slide-image"
            />
            <div className="hero-slide-content">
              <div className="hero-content-wrapper">
                <h1 className="hero-title">
                  {slide.title}
                </h1>
                <h2 className="hero-subtitle">
                  {slide.subtitle}
                </h2>
                <p className="hero-description">
                  {slide.description}
                </p>
                <button className="hero-cta-button">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="hero-slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`hero-slider-dot ${
              currentSlide === index ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;