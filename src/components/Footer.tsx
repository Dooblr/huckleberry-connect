import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__section">
            <h3>Huckleberry Connect</h3>
            <p>Bridging Tech & Human Connection</p>
          </div>
          
          <div className="footer__section">
            <h4>Navigation</h4>
            <nav className="footer__nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/events">Events</Link>
              <Link to="/get-involved">Get Involved</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer__section">
            <h4>Connect</h4>
            <div className="footer__social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Newsletter</h4>
            <form className="footer__newsletter">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Huckleberry Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 