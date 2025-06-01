import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Hotel Manager",
      quote: "Northwest has consistently delivered high-quality uniforms for our entire staff. Their attention to detail is exceptional and the fabrics are durable even with daily use.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Priya Patel",
      role: "School Administrator",
      quote: "We've been working with Northwest for our school uniforms for over 5 years. Their quality and service are unmatched, and they always deliver on schedule.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Vikram Mehta",
      role: "Restaurant Owner",
      quote: "The custom chef uniforms from Northwest have received great feedback from our kitchen staff for both style and comfort. Excellent craftsmanship!",
      image: "/api/placeholder/80/80"
    }
  ];
  
  const nextTestimonial = () => {
    if (!sliding) {
      setSliding(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setSliding(false), 500);
    }
  };
  
  const prevTestimonial = () => {
    if (!sliding) {
      setSliding(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setSliding(false), 500);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, sliding]);
  
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-title">
          <span>WHAT CLIENTS SAY</span>
          <h2>TESTIMONIALS</h2>
        </div>
        
        <div className="testimonial-slider">
          <div 
            className="testimonial-slide"
            style={{ 
              marginTop: '40px',
              opacity: sliding ? 0.7 : 1,
              transition: 'opacity 0.5s ease'
            }}
          >
            {/* <img 
              src={testimonials[activeIndex].image} 
              alt={testimonials[activeIndex].name}
              className="testimonial-img"
            /> */}
            
            {/* <div className="testimonial-quote">"</div> */}
            <p className="testimonial-text">{testimonials[activeIndex].quote}</p>
            <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
            <p className="testimonial-role">{testimonials[activeIndex].role}</p>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`testimonial-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => {
                  if (!sliding) {
                    setSliding(true);
                    setActiveIndex(index);
                    setTimeout(() => setSliding(false), 500);
                  }
                }}
              ></div>
            ))}
          </div>
          
          <div 
            className="slider-arrow prev" 
            onClick={prevTestimonial}
            style={{ top: '40%' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          
          <div 
            className="slider-arrow next" 
            onClick={nextTestimonial}
            style={{ top: '40%' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;