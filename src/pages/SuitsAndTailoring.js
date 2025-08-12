import React from 'react';
import { Helmet } from 'react-helmet';
import suitImage1 from '../images/suits.png';
import suitImage2 from '../images/suits_2.png';
import fabricImage from '../images/fabric.png';

const SuitsAndTailoring = () => {
  return (
    <>
      <Helmet>
        <title>Bespoke Suits & Best Tailoring in Madurai | North West</title>
        <meta name="description" content="Find the best tailoring for men's suits in Madurai. We offer bespoke suits, wedding suits, and formal wear using premium fabrics from Raymond and Grasim." />
        <meta name="keywords" content="best tailoring in madurai, best suits in madurai, bespoke suits madurai, wedding suits madurai, raymond tailoring madurai, grasim suits madurai" />
        <link rel="canonical" href="https://northwestmadurai.com/suits-and-tailoring-madurai" />
      </Helmet>
      
      <div className="pt-24"> {/* Padding to offset fixed navbar */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">Expert Tailoring & Bespoke Suits in Madurai</h1>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                At North West, we believe a suit is more than just clothing; it's a statement of personal style and confidence. Our master tailors combine decades of craftsmanship with the finest fabrics to create suits that are uniquely yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="grid grid-cols-2 gap-4">
                  <img src={suitImage1} alt="Perfectly crafted corporate suit in Madurai" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
                  <img src={suitImage2} alt="Complete bespoke suit with accessories" className="rounded-lg shadow-lg w-full h-auto object-cover mt-8"/>
              </div>
              <div>
                <h2 className="text-3xl font-serif mb-6 text-gray-800">The North West Tailoring Promise</h2>
                <div className="space-y-6 text-gray-700">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-bold mr-4">1</div>
                        <div>
                            <h3 className="font-bold text-lg">Unmatched Precision & Fit</h3>
                            <p>From the initial measurement to the final stitch, we ensure a flawless fit. We are known as the best tailoring shop in Madurai for a reason.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-bold mr-4">2</div>
                        <div>
                            <h3 className="font-bold text-lg">Premium Fabric Selection</h3>
                            <p>As authorized dealers of Raymond and Grasim in Madurai, we provide an unparalleled selection of high-quality materials for your custom suits.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-bold mr-4">3</div>
                        <div>
                            <h3 className="font-bold text-lg">For Every Occasion</h3>
                            <p>Whether you need a sharp business suit, an elegant wedding suit, or a custom blazer, we cater to all your formal wear needs in Tamil Nadu.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuitsAndTailoring;