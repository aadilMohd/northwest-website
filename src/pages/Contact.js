import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../components/ContactSection';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact North West | Visit Our Showroom in Madurai</title>
                <meta name="description" content="Contact North West for enquiries about suits, tailoring, or uniforms. Visit our showroom at North Veli Street, Madurai, or get in touch with us online." />
                <link rel="canonical" href="https://northwestmadurai.com/contact-us" />
            </Helmet>
            <div className="pt-24">
                {/* It's best practice for each page to have its own unique H1 tag for SEO. */}
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center my-8">Contact Us</h1>
                <ContactSection />
            </div>
        </>
    );
};

export default Contact;