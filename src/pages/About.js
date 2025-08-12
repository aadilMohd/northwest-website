import React from 'react';
import { Helmet } from 'react-helmet';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About North West | 30+ Years of Textile Excellence in Madurai</title>
                <meta name="description" content="Learn about the history of North West, Madurai's trusted textile and uniform specialist since 1993. Our commitment to quality, craftsmanship, and customer satisfaction." />
                <meta name="keywords" content="about northwest madurai, textile company madurai, akbar omar, mohammed thahir akbar" />
                <link rel="canonical" href="https://northwestmadurai.com/about-us" />
            </Helmet>
            <div className="pt-24">
                <AboutSection />
                <TestimonialsSection />
            </div>
        </>
    );
};

export default About;
