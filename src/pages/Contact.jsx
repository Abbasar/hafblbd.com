import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // EmailJS import kora hoyeche
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const hasEmailConfig = Boolean(emailServiceId && emailTemplateId && emailPublicKey);

  const formRef = useRef(); // Form er reference er jonno
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // EmailJS Integration
      if (!hasEmailConfig) {
        setIsSubmitting(false);
        setFormErrors({
          submit: 'Email service is not configured. Please set VITE_EMAILJS_* environment variables.',
        });
        return;
      }

      emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        formRef.current,
        emailPublicKey
      )
      .then((result) => {
          if (import.meta.env.DEV) {
            console.log('Email sent successfully:', result.text);
          }
          setFormSubmitted(true);
          setFormErrors({});
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
          console.error('Email send error:', error.text);
          alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
          setIsSubmitting(false);
      });

    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or feedback</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon"><FaMapMarkerAlt /></div>
              <h3>Our Location</h3>
              <p>40, Inner circular road, first & second floor, naya paltan, Dhaka - 1000, Bangladesh</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon"><FaPhoneAlt /></div>
              <h3>Phone Number</h3>
              <p>+880-1755-579864</p>
              <p>+880-1755-579869</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon"><FaEnvelope /></div>
              <h3>Email Address</h3>
              <p>hafblbd@gmail.com</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon"><FaClock /></div>
              <h3>Business Hours</h3>
              <p>Saturday - Thursday: 10:00 AM - 6:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-content">
              <div className="contact-form-text">
                <h2>Send Us a Message</h2>
                <p>Have a question or want to know more about our products? Fill out the form below and we'll get back to you as soon as possible.</p>
                <div className="contact-social">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    <a href="https://wa.me/+8801755579869" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                {formSubmitted ? (
                  <div className="form-success-message">
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                    <button className="btn" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={formErrors.name ? 'error' : ''}
                        autoComplete="name"
                        required
                      />
                      {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'error' : ''}
                        autoComplete="email"
                        required
                      />
                      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={formErrors.subject ? 'error' : ''}
                        autoComplete="off"
                        required
                      />
                      {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={formErrors.message ? 'error' : ''}
                        required
                      ></textarea>
                      {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                    </div>
                    {formErrors.submit && <span className="error-message">{formErrors.submit}</span>}
                    
                    <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=40,+Inner+circular+road,+naya+paltan,+Dhaka+-+1000,+Bangladesh&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I place a bulk order?</h3>
              <p>You can place a bulk order by filling out the contact form above or by calling our customer service team directly.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer delivery services?</h3>
              <p>Yes, we offer delivery services within Dhaka city and selected areas outside Dhaka.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;