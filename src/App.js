import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FeaturedCategories from './components/FeaturedCategories';
import DesignerSection from './components/DesignerSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/globals.css';
import Gallery3D from './components/Gallery3D';
import Gallery, {GridGallery} from './components/Gallery';

const App = () => {
  return (
    <div className="font-sans bg-white">
      <Navbar />
       <HeroSlider />
      <FeaturedCategories />
      <DesignerSection />
      < Gallery/>
      <ClientsSection />
      <AboutSection />
      <TestimonialsSection />  
    <ContactSection />
      <Footer />
    
    </div>
  );
};

export default App;