import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import './ProgramsPage.scss';

interface ConsultForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ProgramsPage = () => {
  const [showConsultForm, setShowConsultForm] = useState(false);
  const [consultForm, setConsultForm] = useState<ConsultForm>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest! We will contact you soon.');
    setShowConsultForm(false);
    setConsultForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="programs">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <h1>Our Programs</h1>
          <p className="lead">
            Empowering communities through technology education and innovation
          </p>
        </div>
      </section>

      {/* Grovecraft Section */}
      <section className="program-section grovecraft">
        <div className="container">
          <div className="section-content">
            <h2>Grovecraft</h2>
            <p className="description">
              A comprehensive technology education program designed to empower
              individuals with the skills and knowledge needed to thrive in the
              digital age. Through hands-on learning and real-world projects,
              participants develop practical skills in programming, web development,
              and digital literacy.
            </p>
            <div className="features">
              <div className="feature">
                <h3>Curriculum</h3>
                <p>
                  Structured learning paths covering web development, programming
                  fundamentals, and digital skills.
                </p>
              </div>
              <div className="feature">
                <h3>Community</h3>
                <p>
                  Join a supportive learning environment with peer collaboration
                  and mentorship opportunities.
                </p>
              </div>
              <div className="feature">
                <h3>Projects</h3>
                <p>
                  Build real-world projects that demonstrate your skills and
                  contribute to your portfolio.
                </p>
              </div>
            </div>
            <a
              href="https://grovecraft.org"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Visit Grovecraft.org <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Hackathons & Make-a-thons Section */}
      <section className="program-section hackathons">
        <div className="container">
          <div className="section-content">
            <h2>Hackathons & Make-a-thons</h2>
            <p className="description">
              Regular events that bring together creative minds to solve real-world
              problems through technology. Whether you're a beginner or an
              experienced developer, our hackathons and make-a-thons provide the
              perfect platform to learn, collaborate, and innovate.
            </p>
            <div className="upcoming-events">
              <h3>Upcoming Events</h3>
              <div className="event-list">
                <div className="event-item">
                  <div className="event-date">April 15, 2024</div>
                  <div className="event-details">
                    <h4>Community Innovation Hackathon</h4>
                    <p>
                      Join us for a day of coding and creativity focused on
                      building solutions for local community challenges.
                    </p>
                  </div>
                  <button className="cta-button">Register Now</button>
                </div>
                <div className="event-item">
                  <div className="event-date">May 20, 2024</div>
                  <div className="event-details">
                    <h4>Youth Tech Make-a-thon</h4>
                    <p>
                      A special event for young innovators to create and showcase
                      their tech projects.
                    </p>
                  </div>
                  <button className="cta-button">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="program-section consulting">
        <div className="container">
          <div className="section-content">
            <h2>Consulting Services</h2>
            <p className="description">
              Expert technology consulting and fractional CTO services to help
              organizations navigate the digital landscape. Our team provides
              strategic guidance, technical expertise, and implementation support
              to drive innovation and growth.
            </p>
            <div className="services">
              <div className="service">
                <h3>Strategic Planning</h3>
                <p>
                  Develop comprehensive technology roadmaps aligned with your
                  business goals.
                </p>
              </div>
              <div className="service">
                <h3>Technical Leadership</h3>
                <p>
                  Fractional CTO services to guide your technical decisions and
                  team development.
                </p>
              </div>
              <div className="service">
                <h3>Implementation Support</h3>
                <p>
                  Hands-on assistance with technology implementation and digital
                  transformation.
                </p>
              </div>
            </div>
            <button
              className="cta-button"
              onClick={() => setShowConsultForm(true)}
            >
              Request a Consult
            </button>
          </div>
        </div>
      </section>

      {/* Huckleberry Studio Section */}
      <section className="program-section studio">
        <div className="container">
          <div className="section-content">
            <h2>Huckleberry Studio</h2>
            <p className="description">
              Our creative hub for developing innovative technology solutions and
              digital products. The Studio combines technical expertise with
              creative thinking to bring unique ideas to life.
            </p>
            <div className="coming-soon">
              <div className="coming-soon-content">
                <h3>Coming Soon</h3>
                <p>
                  We're working on something exciting! Stay tuned for updates about
                  our upcoming products and services.
                </p>
                <button className="cta-button disabled" disabled>
                  Coming Soon <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Form Modal */}
      {showConsultForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setShowConsultForm(false)}
            >
              ×
            </button>
            <h2>Request a Consultation</h2>
            <form onSubmit={handleConsultSubmit} className="consult-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={consultForm.name}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={consultForm.email}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  value={consultForm.company}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, company: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={consultForm.message}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, message: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="cta-button">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramsPage; 