import React, { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const IS_SERVER = typeof window === "undefined";

function useMediaQuery(
  query,
  {
    defaultValue = false,
    initializeWithValue = true,
  } = {}
) {
  const getMatches = (query) => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

const Carousel = memo(
  ({
    handleClick,
    controls,
    galleryImages,
    isCarouselActive,
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 600 : 900;
    const faceCount = galleryImages.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center bg-gray-100 rounded-lg"
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
          willChange: "transform",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={`key-${image.src}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-gray-100 p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(image.src, i)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                layoutId={`img-${image.src}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-square h-48 md:h-56"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

const Gallery3D = () => {
  const [activeImg, setActiveImg] = useState(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const controls = useAnimation();
  
  // Gallery image data
  const allGalleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fHRleHRpbGV8ZW58MHx8fHwxNjgyMzU0MDc0fDA&ixlib=rb-4.0.3&q=80&w=2000",
      alt: "Corporate Uniforms",
      category: "corporate"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE0fHxob3NwaXRhbCUyMHVuaWZvcm18ZW58MHx8fHwxNjgyMzU0MTgzfDA&ixlib=rb-4.0.3&q=80&w=2000",
      alt: "Healthcare Uniforms",
      category: "healthcare"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxzY2hvb2wlMjB1bmlmb3JtfGVufDB8fHx8MTY4MjM1NDI2OXww&ixlib=rb-4.0.3&q=80&w=2000",
      alt: "Education Uniforms",
      category: "education"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1573227725757-7bcc6ed704fe?&fit=crop&w=800&h=800",
      alt: "Hospitality Uniforms",
      category: "hospitality"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?&fit=crop&w=800&h=800",
      alt: "Retail Textiles",
      category: "retail"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?&fit=crop&w=800&h=800",
      alt: "Premium Fabrics",
      category: "retail"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1582902304088-82edb24b0a26?&fit=crop&w=800&h=800",
      alt: "Custom Designs",
      category: "custom"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1559070881-262a1c3efb3a?&fit=crop&w=800&h=800",
      alt: "Corporate Showcases",
      category: "corporate"
    }
  ];
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'retail', label: 'Retail' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'custom', label: 'Custom' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === activeCategory);

  const handleClick = (imgUrl, index) => {
    setActiveImg(imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  return (
    <section id="gallery" className="gallery-section py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">OUR GALLERY</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Explore our diverse collection of textiles and uniforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-black text-white' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div layout className="relative">
          <AnimatePresence mode="wait">
            {activeImg && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                layoutId={`img-container-${activeImg}`}
                layout="position"
                onClick={handleClose}
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-5 md:p-10"
                style={{ willChange: "opacity" }}
                transition={transitionOverlay}
              >
                <motion.div className="relative max-w-4xl mx-auto">
                  <motion.img
                    layoutId={`img-${activeImg}`}
                    src={activeImg}
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{
                      willChange: "transform",
                    }}
                  />
                  <button 
                    className="absolute -top-12 right-0 text-white w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClose();
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="h-[400px] w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <Carousel
              handleClick={handleClick}
              controls={controls}
              galleryImages={filteredImages}
              isCarouselActive={isCarouselActive}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery3D;