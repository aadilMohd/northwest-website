import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, send the email
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceId = 'service_aebnk5w';
    const templateId = 'template_l2gdc4q';
    const userId = 'mYA6pXmtwmwfq9Zv8';
    
    const templateParams = {
      to_email: 'mohammedaadil580@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject || 'New inquiry from Northwest website',
      message: formData.message
    };
    
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setFormSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <span>REACH OUT</span>
          <h2>GET IN TOUCH</h2>
          <p>Have questions or need more information? Fill out the form below and we'll get back to you shortly.</p>
        </div>
        
        <div className="contact-form-container">
          {formSuccess ? (
            <div className="form-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name*</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${formErrors.name ? 'error' : ''}`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email*</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    placeholder="johndoe@example.com"
                  />
                  {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enquiry about corporate uniforms"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message*</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input ${formErrors.message ? 'error' : ''}`}
                  placeholder="Please provide details about your enquiry..."
                ></textarea>
                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
              </div>
              <div className="form-submit-container">
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                        <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="#ffffff" strokeDasharray="32" strokeDashoffset="10"></circle>
                      </svg>
                      SENDING...
                    </span>
                  ) : (
                    'SEND MESSAGE'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>0452 4524259</p>
            <a href="tel:+911234567890" className="contact-link">Call Us</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email</h3>
            <p>info@northwest.com</p>
            <a href="mailto:mohammedaadil580@gmail.com" className="contact-link">Email Us</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Address</h3>
            <p>36/28, North Chitrai St, Madurai Main, Madurai, Tamil Nadu 625001</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">View on Map</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;