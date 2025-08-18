import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery | Our Work in Suits, Uniforms & Textiles</title>
                <meta name="description" content="View the gallery of our work. See examples of our custom tailored suits, corporate uniforms, school uniforms, and premium textiles." />
                <link rel="canonical" href="https://northwestmadurai.com/gallery" />
            </Helmet>
            <div className="pt-24">
                {/* The Gallery component itself has an H2, so we add an H1 here for better page structure. */}
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center my-8">Our Work</h1>
                <Gallery />
            </div>
        </>
    );
};

export default GalleryPage;
