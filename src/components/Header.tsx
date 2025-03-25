import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h2>Huckleberry Connect</h2>
        </Link>
        
        <div className="header__controls">
          <button 
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className={`header__menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/programs" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Programs</Link>
          <Link to="/events" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link to="/get-involved" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
          <Link to="/contact" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 