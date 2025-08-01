import React, { useState } from 'react';
import sports_image from "../images/sports_uniform.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setCurrentIndex(0); // Reset slider when tab changes
  }, [activeTab]);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'school', name: 'School' },
    { id: 'healthcare', name: 'Healthcare' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2060&auto=format&fit=crop',
      title: 'Corporate Suits',
      category: 'corporate',
      description: 'Premium tailored suits for business professionals'
    },
    {
      id: 2,
      image: 'https://lodgingmagazine.com/wp-content/uploads/2019/04/front-desk-staff-uniform-iStock-941785090.jpg',
      title: 'Hotel Staff Uniforms',
      category: 'hospitality',
      description: 'Elegant designs for hotel staff across departments'
    },
    {
      id: 3,
      image: 'https://inclusive-solutions.com/wp-content/uploads/2021/12/iStock-1047620596.jpg.webp',
      title: 'School Uniforms',
      category: 'school',
      description: 'Comfortable and durable school uniforms for all ages'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop',
      title: 'Healthcare Attire',
      category: 'healthcare',
      description: 'Functional and comfortable medical uniforms'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop',
      title: 'Chef Uniforms',
      category: 'hospitality',
      description: 'Professional chef coats, pants and aprons'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop',
      title: 'Executive Blazers',
      category: 'corporate',
      description: 'Stylish blazers for corporate environments'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
      title: 'Nurse Uniforms',
      category: 'healthcare',
      description: 'Comfortable scrubs and nursing attire'
    },
    {
      id: 8,
      image: sports_image,
      title: 'Sports Uniforms',
      category: 'school',
      description: 'Athletic wear for school sports teams'
    }
  ];
  
  const openLightbox = (image) => {
    setLightboxImage(image);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'auto';
  };
  
  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const goToPrev = () => setCurrentIndex((prev) => prev === 0 ? filteredItems.length - 1 : prev - 1);
  const goToNext = () => setCurrentIndex((prev) => prev === filteredItems.length - 1 ? 0 : prev + 1);
  const goToIndex = (idx) => setCurrentIndex(idx);
  
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title">
          <span>OUR WORK</span>
          <h2>PRODUCT GALLERY</h2>
          <p>Browse our collection of premium quality uniforms and textiles crafted with excellence</p>
        </div>
        
        <div className="gallery-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`gallery-tab ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery grid or carousel */}
        {isMobile ? (
          <div style={{ position: 'relative', width: '100%', minHeight: '350px' }}>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <button onClick={goToPrev} style={{
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                color: '#fff',
                fontSize: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
              }} aria-label="Previous">
                &#8592;
              </button>
              <div style={{ width: '100%' }}>
                <div style={{
                  minWidth: '80vw',
                  maxWidth: '90vw',
                  margin: '0 auto',
                  background: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                }}>
                  <div className="gallery-image" onClick={() => openLightbox(filteredItems[currentIndex])}>
                    <img src={filteredItems[currentIndex].image} alt={filteredItems[currentIndex].title} />
                    <div className="gallery-overlay">
                      <div className="gallery-zoom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-content">
                    <h3>{filteredItems[currentIndex].title}</h3>
                    <p>{filteredItems[currentIndex].description}</p>
                  </div>
                </div>
              </div>
              <button onClick={goToNext} style={{
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                color: '#fff',
                fontSize: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
              }} aria-label="Next">
                &#8594;
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16, gap: 8 }}>
              {filteredItems.map((_, idx) => (
                <div key={idx} onClick={() => goToIndex(idx)} style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: idx === currentIndex ? '#000' : '#ccc',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }} />
              ))}
            </div>
          </div>
        ) : (
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image" onClick={() => openLightbox(item)}>
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <div className="gallery-zoom">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="gallery-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {showLightbox && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img src={lightboxImage.image} alt={lightboxImage.title} />
              <div className="lightbox-caption">
                <h3>{lightboxImage.title}</h3>
                <p>{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;