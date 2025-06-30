import React, { useState } from 'react';
import image from "../images/about_us_img.png";
import image2 from "../images/about_us_img2.png";
import image3 from "../images/about_us_img3.png";
import image4 from "../images/suits.png";

const AboutSection = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const images = [
    image, // Using the imported image
    image2,
    image3,
  ];
  
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-grid">
              <div>
                <img src={image} alt="About 1" className="about-img" />
                <img src={image3} alt="About 2" className="about-img" style={{ marginTop: '1rem' }} />
              </div>
              <div>
                <img src={image2} alt="About 3" className="about-img" style={{ marginTop: '2rem' }} />
                {/* <img src={image4} alt="About 4" className="about-img" style={{ marginTop: '1rem' }} /> */}
              </div>
            </div>
            
            <div className="about-square black"></div>
            <div className="about-square outline"></div>
          </div>
          
          <div className="about-content">
            <span>OUR STORY</span>
            <h2>ABOUT COMPANY</h2>
            
            <div className="about-text-container" style={{ 
              maxHeight: isReadMore ? '1000px' : '300px', 
              overflow: 'hidden', 
              transition: 'max-height 0.5s ease' 
            }}>
              <p className="about-text">
                <strong>Northwest</strong> is a specialist textile company, set up to meet the multi-faceted
                challenges of both retail textile needs and the uniform requirements of various industries.
              </p>
              <p className="about-text">
                The foundation of Northwest goes back over 30 years when we started as a small family business
                with an eye for perfection. We've devoted time and energy in perfecting garment cuts, developing
                and delivering artful, durable and well-crafted textiles.
              </p>
              <p className="about-text">
                Today, we proudly serve both individual customers and large institutional clients with the
                same dedication to quality and customer satisfaction.
              </p>
              <p className="about-text">
                Our team of experienced designers and tailors work closely with clients to understand their specific
                requirements and create customized solutions that exceed expectations. We source the finest materials
                from trusted suppliers to ensure that every garment we produce meets our high standards of quality
                and durability.
              </p>
              <p className="about-text">
                We specialize in creating uniforms for various sectors including hospitality, healthcare, education,
                and corporate. Our retail collection features premium fabrics and designs for discerning customers
                who appreciate quality and style.
              </p>
            </div>
            
            <button 
              className="read-more-btn"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              {isReadMore ? 'READ LESS' : 'READ MORE'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  marginLeft: '8px', 
                  transform: isReadMore ? 'rotate(180deg)' : 'rotate(0)', 
                  transition: 'transform 0.3s ease' 
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;