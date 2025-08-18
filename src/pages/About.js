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
                <link rel="canonical" href="https://northwestmadurai.com/about-us" />
            </Helmet>
            <div className="pt-24">
                {/* It's best practice for each page to have its own unique H1 tag for SEO. */}
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center my-8">About North West</h1>
                <AboutSection />
                <TestimonialsSection />
            </div>
        </>
    );
};

export default About;
