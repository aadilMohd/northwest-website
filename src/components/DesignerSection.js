import React from 'react';
import image from "../images/school_uniform.png";
import image1 from "../images/shirt.png";
import image2 from "../images/suits.png";
import image5 from "../images/suits_2.png";
import image4 from "../images/fabric.png";
import image3 from "../images/chef_coat.png";


const DesignerSection = () => {
  const imageList = [
    image3,
    image1,
    image4,
    image,
    image4,
    image5
  ];

  return (
    <section id="catalogue" className="designer-section">
      <div className="container">
        <div className="section-title">
          <h2>Designer Uniforms</h2>
          <p>Custom designed uniforms for all industries, crafted with precision and style</p>
        </div>
        
        <div className="designer-grid">
          {imageList.map((_, index) => (
            <div key={index}>
              <img 
                src={imageList[index]} 
                alt={`Designer Uniform ${index + 1}`}
                className="designer-img"
              />
            </div>
          ))}
          
          <div className="designer-content">
            <h3>Designer Uniforms</h3>
            <p>Explore our catalog of professionally designed uniforms for various industries</p>
            <a href="#" className="hero-btn">VIEW CATALOG</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;