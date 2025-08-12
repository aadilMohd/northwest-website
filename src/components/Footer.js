import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">NORTHWEST</h3>
            <p className="footer-text">
              Quality textiles and uniform solutions since 1990, providing premium garments for all industries with exceptional craftsmanship.
            </p>
            {/* Social Icons Here */}
          </div>
          
          <div>
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><HashLink smooth to="/#home" scroll={scrollWithOffset} className="footer-link">Home</HashLink></li>
              <li><HashLink smooth to="/#about" scroll={scrollWithOffset} className="footer-link">About Us</HashLink></li>
              <li><HashLink smooth to="/#catalogue" scroll={scrollWithOffset} className="footer-link">Catalogue</HashLink></li>
              <li><HashLink smooth to="/#gallery" scroll={scrollWithOffset} className="footer-link">Gallery</HashLink></li>
              <li><HashLink smooth to="/#clients" scroll={scrollWithOffset} className="footer-link">Clients</HashLink></li>
              <li><HashLink smooth to="/#contact" scroll={scrollWithOffset} className="footer-link">Contact</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">OUR PAGES</h4>
            <ul className="footer-links">
                <li><Link to="/suits-and-tailoring-madurai" className="footer-link">Suits & Tailoring</Link></li>
                <li><Link to="/uniforms-in-tamilnadu" className="footer-link">Uniforms</Link></li>
                <li><Link to="/about-us" className="footer-link">About Page</Link></li>
                <li><Link to="/gallery" className="footer-link">Gallery Page</Link></li>
                <li><Link to="/contact-us" className="footer-link">Contact Page</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">CONTACT INFO</h4>
             {/* Contact Info Here */}
          </div>
        </div>
        
        <div className="footer-divider">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Northwest. All rights reserved.</p>
          <div className="back-to-top" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;