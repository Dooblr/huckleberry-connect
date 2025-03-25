import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './HomePage.scss';

interface HexTile {
  id: number;
  color: string;
  isGlowing: boolean;
}

const HomePage = () => {
  const [hexTiles, setHexTiles] = useState<HexTile[]>([]);
  const [activeTileId, setActiveTileId] = useState<number | null>(null);

  useEffect(() => {
    // Generate 50 hex tiles with random colors
    const tiles = Array.from({ length: 50 }, (_, index) => ({
      id: index,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      isGlowing: false
    }));
    setHexTiles(tiles);

    // Set up interval to randomly select one tile to glow
    const interval = setInterval(() => {
      setActiveTileId(Math.floor(Math.random() * 50));
    }, 3000); // Increased from 2000ms to 3000ms for smoother transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hex-grid">
          {hexTiles.map((tile) => (
            <div
              key={tile.id}
              className={`hex-tile ${tile.id === activeTileId ? 'glow' : ''}`}
              style={{ '--tile-color': tile.color } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="hero__content">
          <h1>Bridging Tech & Human Connection</h1>
          {/* <p className="lead">
            Empowering the next generation through technology education and innovation.
          </p> */}
          <Link to="/get-involved" className="cta-button">
            Get Involved
          </Link>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Huckleberry Connect</h2>
          <p>
            Huckleberry Connect is a dynamic technology initiative fostering innovation
            and community engagement through various programs and workshops. We bring
            together tech enthusiasts, professionals, and communities to create
            meaningful impact.
          </p>
          <Link to="/about" className="learn-more cta-button">Learn More</Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="container">
          <h2>Our Programs</h2>
          <div className="programs__grid">
            <div className="program-card">
              <h3>Grovecraft</h3>
              <p>Empowering communities through innovative tech solutions.</p>
              <a href="https://grovecraft.org" className="program-button" target="_blank" rel="noopener noreferrer">
                Visit Grovecraft
              </a>
            </div>
            <div className="program-card">
              <h3>Hackathons / Workshops</h3>
              <p>Collaborative events fostering creativity and problem-solving.</p>
              <Link to="/programs#hackathons" className="program-button">Learn More</Link>
            </div>
            <div className="program-card">
              <h3>Consulting Services</h3>
              <p>Expert guidance for your technology initiatives.</p>
              <Link to="/programs#consulting" className="program-button">Explore Services</Link>
            </div>
            <div className="program-card">
              <h3>Studio</h3>
              <p>Innovative tech solutions coming soon.</p>
              <button className="program-button" disabled>Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact__metrics">
            <div className="metric">
              <h3>500+</h3>
              <p>Community Members</p>
            </div>
            <div className="metric">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="metric">
              <h3>10+</h3>
              <p>Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Join our newsletter to stay updated with our latest initiatives and events.</p>
          <form className="newsletter__form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="cta-button">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 