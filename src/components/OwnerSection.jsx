import './OwnerSection.css';
import { FaPhone, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const OwnerSection = () => {
  const owners = [
    {
      id: 1,
      name: 'Hossain Ali',
      position: 'Founder & CEO',
      image: '/images/profile-pic.jpg',
      bio: 'With over 20 years of experience in the fruit industry, Hossain Ali founded the company with a vision to provide premium quality fruits to customers across Bangladesh.',
    },
    {
      id: 2,
      name: 'Fatima Ali',
      position: 'Co-Founder & COO',
      image: '/images/profile-pic.jpg',
      bio: 'Fatima brings her expertise in operations and supply chain management to ensure that our products maintain the highest standards of quality and freshness.',
    },
    {
      id: 3,
      name: 'Kamal Hossain',
      position: 'Director of Marketing',
      image: '/images/profile-pic.jpg',
      bio: 'Kamal leads our marketing initiatives with innovative strategies to promote healthy living through our fruit products.',
    },
  ];

  return (
    <section className="section owners-section">
      <div className="container">
        <h2 className="section-title">Meet Our Leadership</h2>
        <p className="section-subtitle">The team behind our success</p>

        <div className="owners-grid">
          {owners.map((owner) => (
            <div className="owner-card" key={owner.id}>
              <div className="owner-image">
                <img src={owner.image} alt={owner.name} />
              </div>
              <div className="owner-info">
                <h3>{owner.name}</h3>
                <p className="owner-position">{owner.position}</p>
                <p className="owner-bio">{owner.bio}</p>
                <div className="owner-social">
                  <a href="#" aria-label="Phone">
                    <FaPhone />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Email">
                    <MdEmail />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default OwnerSection;