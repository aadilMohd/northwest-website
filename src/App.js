import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Page Components
import Home from './pages/Home';
import SuitsAndTailoring from './pages/SuitsAndTailoring';
import Uniforms from './pages/Uniforms';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

// Import your global styles
import './styles/globals.css';

// You will need to install react-router-dom and react-helmet
// npm install react-router-dom react-helmet

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-white">
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suits-and-tailoring-madurai" element={<SuitsAndTailoring />} />
            <Route path="/uniforms-in-tamilnadu" element={<Uniforms />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;