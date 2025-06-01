import React from 'react';
import elegant_cat from "../images/categories/elegant.png";
import designs_cat from "../images/categories/designs.png";
import comfort_cat from "../images/categories/comfort_image.png";


const FeaturedCategories = () => {
  const featuredCategories = [
    {
      title: "UNIQUE DESIGNS",
      image: designs_cat,
      description: "Distinctive styles for modern businesses"
    },
    {
      title: "ELEGANT UNIFORM",
      image: elegant_cat,
      description: "Sophisticated attire for hospitality and corporate"
    },
    {
      title: "COMFORT & DURABILITY",
      image: comfort_cat,
      description: "Long-lasting quality that feels great to wear"
    }
  ];

  return (
    <section className="featured-categories">
      <div className="container">
        <div className="section-title">
          <h2>Featured Categories</h2>
          <p>Explore our exclusive collection tailored for various industries and requirements</p>
        </div>
        
        <div className="grid-3">
          {featuredCategories.map((category, index) => (
            <div key={index} className="category-card">
              <img 
                src={category.image} 
                alt={category.title}
                className="category-img"
              />
              <div className="category-overlay">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <a href="#contact" className="category-btn">EXPLORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;