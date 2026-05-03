import './PartnerSection.css';

const PartnerSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Agora',
      logo: '/images/partner-agora.png',
    },
    {
      id: 2,
      name: 'Next',
      logo: '/images/partner-next.png',
    },
    {
      id: 3,
      name: 'Sawapno',
      logo: '/images/partner-sawopno.png',
    },
    {
      id: 4,
      name: 'Sheraton',
      logo: '/images/partner-sheraton.png',
    },
    {
      id: 5,
      name: 'Westin',
      logo: '/images/partner-the-westin.png',
    },
  ];

  return (
    <section className="section partners-section">
      <div className="container">
        <h2 className="section-title">Our Trusted Partners</h2>
        <p className="section-subtitle">Working together to deliver quality</p>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.id}>
              <img src={partner.logo} alt={partner.name} />
              <h3>{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
