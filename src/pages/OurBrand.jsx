import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurBrand.css';

const brands = [
  {
    name: "Qismat",
    logo: "/images/qismat-logo.jpeg",
    slogan: "Purity is Our Promise, Quality is Our Business",
    description: 
    `QISMAT is the signature fruit brand of Hossain Ali Food & Beverage Ltd., representing a commitment to natural purity, premium quality, and trust. The brand was created to deliver fresh, healthy, and carefully cultivated fruits directly to consumers under a unified and reliable identity.

All QISMAT fruits are produced in company-owned orchards located in the Chittagong Hill Tracts. Grown on fertile hill land and nurtured under controlled agricultural practices, the fruits benefit from a favorable climate and rich soil conditions. This ensures superior taste, freshness, and nutritional value.

Under the QISMAT brand, Hossain Ali Food & Beverage Ltd. markets and sells a wide range of fruits, with a strong focus on quality assurance at every stage—from cultivation and harvesting to sorting, packaging, and distribution. The company maintains strict standards to ensure that only the best produce reaches customers.

QISMAT stands for:

Naturally grown and carefully selected fruits
Consistent quality and freshness
Hygienic handling and packaging
A trustworthy source backed by professional agro-management

By combining modern agricultural techniques with a deep respect for nature, QISMAT aims to become a recognized and trusted fruit brand in both local and international markets.`,
    url: "https://qismatbd.com/",
    features: ["Naturally Grown", "Consistent Quality", "Hygienic Packaging", "Professional Agro-management"]
  },
  { name: "Yes", logo: "/images/yes-logo.png", url: "/yes-brand" },
  { name: "Next", logo: "/images/next.png", url: "/next-brand" },
  { name: "Sheraton", logo: "/images/next.png", url: "/next-brand" },
  { name: "The Westin", logo: "/images/next.png", url: "/next-brand" },
];

const OurBrand = () => {
  // ডিফল্টভাবে Qismat সিলেক্ট হয়ে থাকবে
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <div className="brand-container">
      <header className="brand-header">
        <h1 className="title">Our Brands</h1>
        <p className="subtitle">Delivering excellence through our diverse portfolio</p>
      </header>

      {/* ব্র্যান্ড সিলেকশন গ্রিড */}
      <div className="brand-grid">
        {brands.map((brand) => (
          <button
            type="button"
            key={brand.name} 
            className={`brand-card ${activeBrand.name === brand.name ? 'active' : ''}`}
            onClick={() => setActiveBrand(brand)}
            aria-pressed={activeBrand.name === brand.name}
          >
            <img src={brand.logo} alt={brand.name} />
          </button>
        ))}
      </div>

      {/* ব্র্যান্ড ডিটেইলস সেকশন */}
      {activeBrand && (
        <div className="brand-details-section">
          <div className="brand-content">
            <div className="brand-info">
              <h2 className="brand-main-name">{activeBrand.name}</h2>
              {activeBrand.slogan && <p className="brand-slogan">{activeBrand.slogan}</p>}
              <p className="brand-description">{activeBrand.description || "Information coming soon..."}</p>
              
              {activeBrand.features && (
                <ul className="brand-features">
                  {activeBrand.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                </ul>
              )}

              {activeBrand.url?.startsWith('http') ? (
                <a href={activeBrand.url} target="_blank" rel="noopener noreferrer" className="visit-link">
                  Visit Website
                </a>
              ) : (
                <Link to={activeBrand.url || '/'} className="visit-link">
                  Visit Website
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBrand;