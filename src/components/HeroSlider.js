import React, { useState, useEffect } from 'react';
import unifrom_image from "../images/hero/uniform_hero.png";
import textile_image from "../images/hero/textile_hero.png";
import custom_image from "../images/hero/custom_hero.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    {
      title: "Complete UNIFORM Solutions",
      subtitle: "Professional attire for businesses and institutions",
      image: unifrom_image,
      bgColor: "#f5f5f5",
      textColor: "#333"
    },
    {
      title: "Premium TEXTILE Collection",
      subtitle: "Quality fabrics for all your needs",
      image: textile_image,
      bgColor: "#333333",
      textColor: "#fff"
    },
    {
      title: "Custom DESIGN Services",
      subtitle: "Tailored solutions for your unique requirements",
      image: custom_image,
      bgColor: "#f0f0f0",
      textColor: "#333"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };
  
  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <section className="hero-section" id="home">
      {slides.map((slide, index) => {
        let slideClass = '';
        
        if (index === currentSlide) {
          slideClass = 'active';
        } else if (index < currentSlide || (currentSlide === 0 && index === slides.length - 1)) {
          slideClass = 'prev';
        } else {
          slideClass = 'next';
        }
        
        return (
          <div 
            key={index} 
            className={`hero-slide ${slideClass}`}
            style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
          >
            <div className="container hero-container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <a href="#catalogue" className="hero-btn" style={{ 
                  backgroundColor: slide.textColor === '#fff' ? '#fff' : '#000',
                  color: slide.textColor === '#fff' ? '#000' : '#fff'
                }}>EXPLORE NOW</a>
              </div>
              <div className="hero-image-container">
                <img 
                  src={slide.image} 
                  alt="Hero" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="slider-arrow prev" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      
      <div className="slider-arrow next" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      
      <div className="slider-controls">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;