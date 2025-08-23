import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSlider from '../components/HeroSlider';
import FeaturedCategories from '../components/FeaturedCategories';
import DesignerSection from '../components/DesignerSection';
import Gallery from '../components/Gallery';
import ClientsSection from '../components/ClientsSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        {/* === UPDATED TITLE === */}
        <title>Suits, Uniforms, Casuals, Formals | Grasim, Raymond | Northwest Madurai</title>
        
        <meta name="description" content="North West is Madurai's leading destination for bespoke suits, custom tailoring, and high-quality corporate & school uniforms. Authorized dealers for Raymond and Grasim." />
        
        {/* === UPDATED KEYWORDS to match the new title === */}
        <meta name="keywords" content="suits madurai, uniforms madurai, casuals madurai, formals madurai, grasim madurai, raymond madurai, northwest madurai, best tailoring madurai" />
        
        <link rel="canonical" href="https://northwestmadurai.com/" />
      </Helmet>
      
      {/* Each of your components is a section on the homepage */}
      {/* The 'id' on each section component is crucial for hash linking */}
      <HeroSlider />
      <FeaturedCategories />
      <DesignerSection /> {/* This component has id="catalogue" internally */}
      <Gallery /> {/* This component has id="gallery" internally */}
      <ClientsSection /> {/* This component has id="clients" internally */}
      <AboutSection /> {/* This component has id="about" internally */}
      <TestimonialsSection /> {/* This component has id="testimonials" internally */}
      <ContactSection /> {/* This component has id="contact" internally */}
    </>
  );
};

export default Home;