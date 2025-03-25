import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Huckleberry Connect</h1>
          <p className="lead">Building bridges between technology and community impact.</p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="founder-story">
        <div className="container">
          <div className="founder-story__content">
            <div className="founder-story__text">
              <h2>Our Story</h2>
              <p>
                Huckleberry Connect was born from a vision to bridge the gap between
                technological innovation and community needs. Our founder recognized
                the potential of bringing together tech expertise with social impact
                initiatives.
              </p>
              <p>
                What started as a small initiative has grown into a dynamic
                organization that empowers communities through technology, education,
                and collaboration.
              </p>
            </div>
            <div className="founder-story__image">
              {/* Placeholder for founder image */}
              <div className="image-placeholder">
                <span>Founder Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision__grid">
            <div className="mission-vision__item">
              <h2>Our Mission</h2>
              <p>
                To empower communities through innovative technology solutions and
                foster meaningful connections between tech professionals and social
                impact initiatives.
              </p>
            </div>
            <div className="mission-vision__item">
              <h2>Our Vision</h2>
              <p>
                A world where technology serves as a catalyst for positive social
                change, making digital innovation accessible and beneficial to all
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values__grid">
            <div className="values__item">
              <h3>Innovation</h3>
              <p>
                We embrace creative solutions and cutting-edge technology to address
                community challenges.
              </p>
            </div>
            <div className="values__item">
              <h3>Collaboration</h3>
              <p>
                We believe in the power of partnership and working together to
                achieve greater impact.
              </p>
            </div>
            <div className="values__item">
              <h3>Inclusivity</h3>
              <p>
                We ensure our programs and solutions are accessible and beneficial
                to all community members.
              </p>
            </div>
            <div className="values__item">
              <h3>Impact</h3>
              <p>
                We measure our success by the positive change we create in
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team__intro">
            We're building a diverse team of passionate individuals committed to
            making a difference through technology.
          </p>
          <div className="team__grid">
            {/* Placeholder for team members */}
            <div className="team__member">
              <div className="image-placeholder">
                <span>Team Member</span>
              </div>
              <h3>Position Open</h3>
              <p>Board Member</p>
            </div>
            <div className="team__member">
              <div className="image-placeholder">
                <span>Team Member</span>
              </div>
              <h3>Position Open</h3>
              <p>Board Member</p>
            </div>
            <div className="team__member">
              <div className="image-placeholder">
                <span>Team Member</span>
              </div>
              <h3>Position Open</h3>
              <p>Board Member</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 