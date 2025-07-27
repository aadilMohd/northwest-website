import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Best Suits & Uniforms in Madurai, Tamil Nadu | Northwest</title>
        <meta name="description" content="Northwest offers the best suits and uniforms in Madurai and Tamil Nadu. Discover premium quality, custom tailoring, and top-rated uniforms for all industries." />
        <meta name="keywords" content="suits in madurai, uniforms in madurai, best suits, best uniforms, suits in tamilnadu, uniforms in tamilnadu, custom suits madurai, corporate uniforms madurai, school uniforms madurai, hospitality uniforms tamilnadu" />
        <link rel="canonical" href="https://northwest.com/" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Best Suits & Uniforms in Madurai, Tamil Nadu | Northwest" />
        <meta property="og:description" content="Northwest offers the best suits and uniforms in Madurai and Tamil Nadu. Discover premium quality, custom tailoring, and top-rated uniforms for all industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://northwest.com/" />
        <meta property="og:image" content="https://northwest.com/og-image.jpg" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Suits & Uniforms in Madurai, Tamil Nadu | Northwest" />
        <meta name="twitter:description" content="Northwest offers the best suits and uniforms in Madurai and Tamil Nadu. Discover premium quality, custom tailoring, and top-rated uniforms for all industries." />
        <meta name="twitter:image" content="https://northwest.com/og-image.jpg" />
        {/* Local business schema (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Northwest",
            "image": "https://northwest.com/og-image.jpg",
            "@id": "https://northwest.com/",
            "url": "https://northwest.com/",
            "telephone": "+91 452 4524259",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "36/28, North Chitrai St, Madurai Main",
              "addressLocality": "Madurai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "625001",
              "addressCountry": "IN"
            },
            "description": "Best suits and uniforms in Madurai and Tamil Nadu. Premium quality, custom tailoring, and top-rated uniforms for all industries.",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 9.9252,
              "longitude": 78.1198
            },
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.instagram.com/"
            ]
          }
        `}</script>
      </Helmet>
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