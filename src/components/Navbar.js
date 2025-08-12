import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/suits-and-tailoring-madurai', label: 'Suits & Tailoring' },
    { path: '/uniforms-in-tamilnadu', label: 'Uniforms' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about-us', label: 'About' },
    { path: '/contact-us', label: 'Contact' }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between align-center">
          <Link to="/" className="navbar-brand">NORTHWEST</Link>
          
          <nav>
            <ul className="nav-menu">
              {menuItems.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                    {item.label}
                  </Link>
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
                <li key={item.path}>
                  <Link to={item.path} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;