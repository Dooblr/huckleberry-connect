import { useState } from 'react';
import toast from 'react-hot-toast';
import './ContactPage.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@huckleberryconnect.org">
                  contact@huckleberryconnect.org
                </a>
              </p>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">(123) 456-7890</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <div className="container">
          <div className="form-container">
            <h2>Send us a Message</h2>
            <p>
              Have questions or want to learn more? Fill out the form below and we'll
              get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="cta-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 