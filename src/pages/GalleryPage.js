import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery | Our Work in Suits, Uniforms & Textiles</title>
                <meta name="description" content="View the gallery of our work. See examples of our custom tailored suits, corporate uniforms, school uniforms, and premium textiles." />
                <meta name="keywords" content="northwest gallery, suit designs, uniform designs madurai, textile collection" />
                <link rel="canonical" href="https://northwestmadurai.com/gallery" />
            </Helmet>
            <div className="pt-24">
                <Gallery />
            </div>
        </>
    );
};

export default GalleryPage;
