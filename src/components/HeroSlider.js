import React, { useState, useEffect } from 'react';
import unifrom_image from "../images/hero/uniform_hero.png";
import textile_image from "../images/hero/textile_hero.png";
import custom_image from "../images/hero/custom_hero.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Add a state to track mobile view
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              {!isMobile && (
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <a href="#catalogue" className="hero-btn" style={{ 
                    backgroundColor: slide.textColor === '#fff' ? '#fff' : '#000',
                    color: slide.textColor === '#fff' ? '#000' : '#fff'
                  }}>EXPLORE NOW</a>
                </div>
              )}
              <div className="hero-image-container" style={isMobile ? {width: '100%', height: '100vh', position: 'relative'} : {}}>
                <img 
                  src={slide.image} 
                  alt="Hero" 
                  className="hero-image"
                  style={isMobile ? {maxWidth: '100%', width: '100%', height: '100vh', objectFit: 'cover', display: 'block'} : {}}
                />
                {isMobile && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)',
                    padding: '2rem 1rem',
                    boxSizing: 'border-box',
                  }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>{slide.title}</h1>
                    <p style={{ fontSize: '1.1rem', fontWeight: 400, textAlign: 'center', marginBottom: 0 }}>{slide.subtitle}</p>
                  </div>
                )}
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