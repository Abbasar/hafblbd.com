import { Link } from 'react-router-dom';
import './Footer.css';
import { FaPhone, FaFacebook, FaLinkedin, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Hossain Ali Food and Beverage Ltd" />
              <span>Hossain Ali Food and Beverage Ltd.</span>
            </Link>
            <p className="footer-desc">
              Premium quality fruits and fruit products for a healthier lifestyle.
              We are committed to providing the freshest and most delicious fruits to our customers.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/explore">Explore</Link></li> */}
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* <div className="footer-links-column">
              <h3>Products</h3>
              <ul>
                <li><Link to="/explore">Fresh Fruits</Link></li>
                <li><Link to="/explore">Fruit Juices</Link></li>
                <li><Link to="/explore">Dried Fruits</Link></li>
                <li><Link to="/explore">Organic Products</Link></li>
              </ul>
            </div> */}

            <div className="footer-links-column">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>40, Inner circular road, first & second floor, naya paltan, Dhaka - 1000, Bangladesh</span>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:+8801755579869">
                    <span>+880 1755 579869</span>
                  </a>
                </li>
                <li>
                  <MdEmail />
                  <a href="mailto:hafblbd@gmail.com">
                    <span>hafblbd@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hossain Ali Food and Beverage Ltd. All Rights Reserved.</p>
          <div className="social-links">
            <a href="tel:+8801755579869" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:hafblbd@gmail.com" aria-label="Email">
              <MdEmail />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
