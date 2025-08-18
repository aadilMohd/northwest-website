import React from 'react';
import { Helmet } from 'react-helmet';
import uniformImage from '../images/categories/designs.png';
import ClientsSection from '../components/ClientsSection';

const Uniforms = () => {
  return (
    <>
      <Helmet>
        <title>Best Uniform Manufacturer in Tamil Nadu | North West Madurai</title>
        <meta name="description" content="North West is a leading uniform supplier and manufacturer in Tamil Nadu, providing high-quality corporate, school, and industrial uniforms with custom designs." />
        <link rel="canonical" href="https://northwestmadurai.com/uniforms-in-tamilnadu" />
      </Helmet>

      <div className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">Leading Uniform Suppliers in Tamil Nadu</h1>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                For over 30 years, North West has been the trusted partner for institutions and businesses seeking durable, stylish, and comfortable uniforms. We handle bulk orders with precision and care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-gray-800">Our Uniform Categories</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-xl mb-2">Corporate & Hospitality Uniforms</h3>
                    <p>Enhance your brand's image with our elegant and professional uniforms for hotels, hospitals, and corporate offices across Tamil Nadu.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-xl mb-2">School & College Uniforms</h3>
                    <p>As a premier school uniform manufacturer in Madurai, we provide comfortable, long-lasting uniforms that students wear with pride.</p>
                  </div>
                   <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-xl mb-2">Industrial & Healthcare Workwear</h3>
                    <p>We supply functional, safe, and hygienic workwear tailored to the specific needs of various industries and healthcare facilities.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                  <img src={uniformImage} alt="Collection of the best corporate and school uniforms in Tamil Nadu" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ClientsSection />
    </>
  );
};

export default Uniforms;
