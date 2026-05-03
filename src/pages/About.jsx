import './About.css';

const About = () => {
  const milestones = [
    {
      year: 2010,
      title: 'Company Founded',
      description: 'Hossain Ali Food and Beverage Ltd was established with a vision to provide premium quality fruits to customers.',
    },
    {
      year: 2013,
      title: 'Expanded Product Line',
      description: 'Introduced fruit juices and dried fruits to our product offerings.',
    },
    {
      year: 2015,
      title: 'Organic Certification',
      description: 'Received organic certification for our farming practices and products.',
    },
    {
      year: 2018,
      title: 'National Distribution',
      description: 'Expanded our distribution network to cover all major cities in Bangladesh.',
    },
    {
      year: 2020,
      title: 'Export Operations',
      description: 'Started exporting our premium fruits and fruit products to neighboring countries.',
    },
    {
      year: 2023,
      title: 'Sustainable Packaging',
      description: 'Implemented eco-friendly packaging solutions for all our products.',
    },
  ];

  const values = [
    {
      id: 1,
      title: 'Quality',
      description: 'We are committed to providing the highest quality fruits and fruit products to our customers.',
      icon: '/images/quality-value.svg',
    },
    {
      id: 2,
      title: 'Sustainability',
      description: 'We practice sustainable farming methods to protect the environment and ensure long-term viability.',
      icon: '/images/sustainability-value.svg',
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'We continuously innovate to improve our products and processes.',
      icon: '/images/innovation-value.svg',
    },
    {
      id: 4,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.',
      icon: '/images/integrity-value.svg',
    },
    {
      id: 5,
      title: 'Community',
      description: 'We support local farmers and communities through fair trade practices and community development initiatives.',
      icon: '/images/community-value.svg',
    },
    {
      id: 6,
      title: 'Customer Focus',
      description: 'We prioritize customer satisfaction and strive to exceed their expectations.',
      icon: '/images/customer-value.svg',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <h1>About</h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section our-story-section">
        <div className="container">
          <div className="our-story-content">
            <div className="our-story-image">
              <img src="/images/our-story.svg" alt="Our Story" />
            </div>
            <div className="our-story-text">
              <h2>Our Story</h2>
              <p>
                
                Hossain Ali Food & Beverage Ltd. is a private limited company established in 2014 by Engr. Mohammed Wazihulla. The company operates in both the agro industry and the food & beverage sector, with a strong commitment to quality, innovation, and sustainable development.

                From its foundation, the company has focused on agro-based industrial activities, particularly large-scale fruit cultivation and processing. It currently owns and manages approximately 100 hectares of mango orchards located in the Chittagong Hill Tracts, a region well known for its agricultural potential and favorable climate.

                In addition to agricultural production, Hossain Ali Food & Beverage Ltd. is engaged in developing and supplying food and beverage products, aiming to meet both local and international market demands. The company is committed to maintaining high standards in food safety, processing, and packaging.

                To enhance its operations, the company is actively seeking modern technologies and advanced machinery from globally recognized suppliers in countries such as Canada, the United Kingdom, Luxembourg, India, Taiwan, Malaysia, and Germany. This strategic approach enables the company to improve efficiency, ensure product quality, and adopt sustainable practices.

                Hossain Ali Food & Beverage Ltd. is a sister concern of Bengal Technological Corporation, a diversified group with strong expertise in engineering and industrial solutions. Its affiliated companies include:

                United Engineers & Construction Ltd.
                Technological Machine & Spares Ltd.

                With a solid foundation, technical support from its group companies, and a forward-looking vision, Hossain Ali Food & Beverage Ltd. aims to become a leading name in the agro industry and food & beverage sector both domestically and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission-vision-content">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To provide the freshest and most nutritious fruits and fruit products to our customers, while supporting sustainable farming practices and empowering local communities.
              </p>
            </div>
            <div className="vision-content">
              <h2>Our Vision</h2>
              <p>
                To be the leading provider of premium quality fruits and fruit products in South Asia, recognized for our commitment to quality, sustainability, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.id}>
                <div className="value-icon">
                  <img src={value.icon} alt={value.title} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      {/* <section className="section milestones-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones in our growth</p>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={milestone.year}>
                <div className="timeline-content">
                  <div className="year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">The people behind our success</p>

          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
          </div>

          <p className="team-description">
            Our diverse team of professionals is dedicated to delivering the best products and services to our customers. From our farmers to our processing staff, quality control experts, and distribution team, everyone plays a vital role in our success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;