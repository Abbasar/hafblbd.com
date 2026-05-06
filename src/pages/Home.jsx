import { Link } from 'react-router-dom';
import PartnerSection from '../components/PartnerSection';
import SwiperHero from '../components/swiper';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <SwiperHero />

      {/* <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Fresh Fruits for a Healthier Life</h1>
            <p>
              Hossain Ali Food and Beverage Ltd brings you the freshest and most delicious fruits
              from around the world. Experience nature's goodness with every bite.
            </p>
            <div className="hero-buttons">
              <Link to="/explore" className="btn btn-secondary">Explore Products</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
          <div className="hero-image">
            
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">We are committed to quality and excellence in everything we do</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/organic-icon.svg" alt="Organic" />
              </div>
              <h3>Healthy</h3>
              <p>All our fruits are grown using organic farming methods without harmful chemicals.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/fresh-icon.svg" alt="Fresh" />
              </div>
              <h3>Always Fresh</h3>
              <p>We ensure that our fruits are delivered fresh from the farm to your table.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/quality-icon.svg" alt="Quality" />
              </div>
              <h3>Premium Quality</h3>
              <p>Our strict quality control ensures that you get only the best fruits.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/delivery-icon.svg" alt="Delivery" />
              </div>
              <h3>Fast Delivery</h3>
              <p>We deliver your orders promptly to ensure maximum freshness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="section about-company-section">
        <div className="container">
          <div className="about-company-content">
            <div className="about-company-image">
              <img src="/images/growth-pic.jpg" alt="Hossain Ali Food and Beverage Ltd" />
            </div>
            <div className="about-company-text">
              <h2>Company Profile</h2>
              <p>
                Hossain Ali Food & Beverage Ltd. is a private limited company established in 2014 by Engr. Mohammed Wazihulla. The company operates in both the agro industry and the food & beverage sector, with a strong commitment to quality, innovation, and sustainable development.
                From its foundation, the company has focused on agro-based industrial activities, particularly large-scale fruit cultivation and processing. It currently owns and manages approximately 100 hectares of mango orchards located in the Chittagong Hill Tracts, a region well known for its agricultural potential and favorable climate...

              </p>
              <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="section products-section">
        <div className="container">
          <h2 className="section-title">Our Popular Products</h2>
          <p className="section-subtitle">Discover our best-selling fruit products</p>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="/images/mango-still-life.jpg" alt="Premium Mangoes" />
              </div>
              <h3>Premium Mangoes</h3>
              <p>Fresh, Sweet and juicy mangoes from our own garden.</p>
              <Link to="/explore" className="btn-small btn-secondary"><span>View Details</span> <span>→</span></Link>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="/images/Banana.jpg" alt="Fresh Orange Juice" />
              </div>
              <h3>Fresh Banana</h3>
              <p>100% natural from the hill region.</p>
              <Link to="/explore" className="btn-small btn-secondary"><span>View Details</span> <span>→</span></Link>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="/images/Red_Lady_Papaya.png" alt="Red_Lady_Papaya" />
              </div>
              <h3>Assorted Dried Fruits</h3>
              <p>Honey-sweet and vibrantly Red Lady Papaya offers a luscious, buttery texture in every healthy bite.</p>
              <Link to="/explore" className="btn-small btn-secondary"><span>View Details</span> <span>→</span></Link>
            </div>
          </div>

          <div className="view-all-products">
            <Link to="/explore" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      {/* <OwnerSection /> */}

      {/* Partners Section */}
      <PartnerSection />

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Hear from our satisfied customers</p>

          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The fruits from Hossain Ali are always fresh and delicious. Their mangoes are the best I've ever tasted!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img src="/images/profile-pic.jpg" alt="Sarah Johnson" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Abdur Rahman</h4>
                  <p>Regular Customer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "I've been ordering their fruit baskets for corporate events, and they never disappoint. Great quality and service!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img src="/images/profile-pic.jpg" alt="Michael Chen" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Arif Billah</h4>
                  <p>Regular Customer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Their organic fruit selection is amazing. I love that I can trust the quality and freshness of everything I buy from them."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img src="/images/profile-pic.jpg" alt="Aisha Rahman" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Aisha Rahman</h4>
                  <p>Regular Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Freshness?</h2>
            <p>Order now and get fresh fruits delivered to your doorstep.</p>
            <Link to="/contact" className="btn btn-large">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
