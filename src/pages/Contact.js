import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../components/ContactSection';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact North West | Visit Our Showroom in Madurai</title>
                <meta name="description" content="Contact North West for enquiries about suits, tailoring, or uniforms. Visit our showroom at North Veli Street, Madurai, or get in touch with us online." />
                <meta name="keywords" content="contact northwest madurai, northwest address, northwest phone number" />
                <link rel="canonical" href="https://northwestmadurai.com/contact-us" />
            </Helmet>
            <div className="pt-24">
                <ContactSection />
            </div>
        </>
    );
};

export default Contact;