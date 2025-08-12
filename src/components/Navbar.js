import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

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
  
  // These links now point to hashes on the homepage
  const menuItems = [
    { path: '/#catalogue', label: 'Catalogue' },
    { path: '/#gallery', label: 'Gallery' },
    { path: '/#clients', label: 'Clients' },
    { path: '/#about', label: 'About Us' },
    { path: '/#testimonials', label: 'Testimonials' },
    { path: '/#contact', label: 'Contact' },
  ];

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value to match your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  
  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between align-center">
          <Link to="/" className="navbar-brand">NORTHWEST</Link>
          
          <nav>
            <ul className="nav-menu">
              {menuItems.map(item => (
                <li key={item.label}>
                  <HashLink 
                    to={item.path} 
                    className="nav-link"
                    smooth 
                    scroll={scrollWithOffset}
                  >
                    {item.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <ul className="mobile-nav-menu">
           {menuItems.map(item => (
                <li key={item.label}>
                  <HashLink 
                    to={item.path} 
                    className="mobile-nav-link" 
                    smooth 
                    scroll={scrollWithOffset}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </HashLink>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;