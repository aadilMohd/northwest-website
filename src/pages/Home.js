import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSlider from '../components/HeroSlider';
import FeaturedCategories from '../components/FeaturedCategories';
import DesignerSection from '../components/DesignerSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Suits & Uniforms in Madurai | Raymond & Grasim Dealer | North West</title>
        <meta name="description" content="North West is Madurai's leading destination for bespoke suits, custom tailoring, and high-quality corporate & school uniforms. Authorized dealers for Raymond and Grasim." />
        <meta name="keywords" content="suits in madurai, uniforms in madurai, raymond in madurai, grasim in madurai, tailoring in madurai, north west madurai" />
        <link rel="canonical" href="https://northwestmadurai.com/" />
      </Helmet>
      
      <HeroSlider />
      <FeaturedCategories />
      <DesignerSection />
      <Gallery />
      <ClientsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;

