import { useState } from 'react';
import toast from 'react-hot-toast';
import './GetInvolvedPage.scss';

const GetInvolvedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'volunteer' // volunteer, partner, board
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', message: '', type: 'volunteer' });
  };

  const handleDonation = () => {
    toast.success('Donation platform integration coming soon!');
  };

  return (
    <div className="get-involved">
      {/* Hero Section */}
      <section className="get-involved-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p className="lead">Join us in making a difference through technology</p>
        </div>
      </section>

      {/* Board Recruitment Section */}
      <section className="board-recruitment">
        <div className="container">
          <div className="section-content">
            <h2>Board Recruitment</h2>
            <p>
              Join our board of directors and help shape the future of Huckleberry Connect.
              We're looking for passionate individuals with expertise in technology,
              community development, or nonprofit management.
            </p>
            <form onSubmit={handleSubmit} className="involvement-form">
              <input
                type="hidden"
                name="type"
                value="board"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell us about your experience and why you're interested"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="cta-button">Apply for Board Position</button>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer">
        <div className="container">
          <div className="section-content">
            <h2>Volunteer Sign-Up</h2>
            <p>
              Make a direct impact in your community by volunteering with us.
              We need help with events, workshops, mentoring, and more.
            </p>
            <form onSubmit={handleSubmit} className="involvement-form">
              <input
                type="hidden"
                name="type"
                value="volunteer"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell us about your skills and interests"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="cta-button">Sign Up to Volunteer</button>
            </form>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section className="donations">
        <div className="container">
          <div className="section-content">
            <h2>Support Our Mission</h2>
            <p>
              Your donation helps us continue our work in bridging technology and
              community impact. Every contribution makes a difference.
            </p>
            <button onClick={handleDonation} className="cta-button">
              Make a Donation
            </button>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner">
        <div className="container">
          <div className="section-content">
            <h2>Partner with Us</h2>
            <p>
              Join forces with us to create lasting impact. We partner with
              organizations, companies, and individuals who share our vision.
            </p>
            <form onSubmit={handleSubmit} className="involvement-form">
              <input
                type="hidden"
                name="type"
                value="partner"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Organization Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Contact Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell us about your organization and partnership interests"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="cta-button">Propose Partnership</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage; 