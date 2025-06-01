import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    
    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between align-center">
          <a href="/" className="navbar-brand">NORTHWEST</a>
          
          <nav>
            <ul className="nav-menu">
              {/* <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}>HOME</a></li> */}
              <li><a href="#catalogue" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#catalogue'); }}>CATALOGUE</a></li>
              <li><a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#gallery'); }}>GALLERY</a></li>
              <li><a href="#clients" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#clients'); }}>CLIENTS</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>ABOUT US</a></li>
              <li><a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#testimonials'); }}>TESTIMONIALS</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>CONTACT</a></li>
              {/* <li><a href="#shop" className="shop-btn">SHOP</a></li> */}
            </ul>
          </nav>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <ul className="mobile-nav-menu">
          {/* <li><a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}>HOME</a></li> */}
          <li><a href="#about" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>ABOUT US</a></li>
          <li><a href="#catalogue" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#catalogue'); }}>CATALOGUE</a></li>
          <li><a href="#gallery" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#gallery'); }}>GALLERY</a></li>
          <li><a href="#clients" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#clients'); }}>CLIENTS</a></li>
          <li><a href="#testimonials" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#testimonials'); }}>TESTIMONIALS</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>CONTACT</a></li>
          {/* <li><a href="#shop" className="shop-btn">SHOP</a></li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;