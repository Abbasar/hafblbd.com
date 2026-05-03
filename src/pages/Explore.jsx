import { useState } from 'react';
import { FaLeaf, FaRecycle, FaAppleAlt, FaCertificate, FaTruckMoving } from "react-icons/fa";
import './Explore.css';


const Explore = () => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fresh', name: 'Fresh Fruits' },
    { id: 'juice', name: 'Fruit Juices' },
    { id: 'dried', name: 'Dried Fruits' },
    { id: 'organic', name: 'Organic Products' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Mangoes',
      category: 'fresh',
      image: '/images/hero-pic-3.jpg',
      price: '$5.99',
      unit: 'per kg',
      description: 'Sweet and juicy mangoes from the best orchards.',
      featured: true,
    },
    {
      id: 2,
      name: 'Fresh Oranges',
      category: 'fresh',
      image: '/images/hero-pic-2.jpg',
      price: '$4.49',
      unit: 'per kg',
      description: 'Juicy and tangy oranges rich in vitamin C.',
      featured: false,
    },
    {
      id: 3,
      name: 'Organic Apples',
      category: 'fresh organic',
      image: '/images/hero-pic-3.jpg',
      price: '$3.99',
      unit: 'per kg',
      description: 'Crisp and sweet organic apples grown without pesticides.',
      featured: true,
    },
    {
      id: 4,
      name: 'Fresh Orange Juice',
      category: 'juice',
      image: '/images/hero-fruits.jpg',
      price: '$2.99',
      unit: 'per bottle',
      description: '100% pure orange juice with no added preservatives.',
      featured: true,
    },
    {
      id: 5,
      name: 'Mixed Fruit Juice',
      category: 'juice',
      image: '/images/hero-pic-2.jpg',
      price: '$3.49',
      unit: 'per bottle',
      description: 'A refreshing blend of various fruits for a nutritious drink.',
      featured: false,
    },
    {
      id: 6,
      name: 'Assorted Dried Fruits',
      category: 'dried',
      image: '/images/hero-pic-3.jpg',
      price: '$7.99',
      unit: 'per pack',
      description: 'Nutritious dried fruits perfect for snacking.',
      featured: true,
    },
    {
      id: 7,
      name: 'Dried Mango Slices',
      category: 'dried',
      image: '/images/hero-pic-2.jpg',
      price: '$6.49',
      unit: 'per pack',
      description: 'Sweet and chewy dried mango slices, a perfect healthy snack.',
      featured: false,
    },
    {
      id: 8,
      name: 'Organic Strawberries',
      category: 'fresh organic',
      image: '/images/hero-pic-3.jpg',
      price: '$4.99',
      unit: 'per pack',
      description: 'Juicy organic strawberries grown with care.',
      featured: false,
    },
    {
      id: 9,
      name: 'Apple Juice',
      category: 'juice',
      image: '/images/hero-pic-2.jpg',
      price: '$2.79',
      unit: 'per bottle',
      description: 'Refreshing apple juice made from fresh apples.',
      featured: false,
    },
    {
      id: 10,
      name: 'Organic Dried Apricots',
      category: 'dried organic',
      image: '/images/hero-pic-3.jpg',
      price: '$8.49',
      unit: 'per pack',
      description: 'Naturally sweet dried apricots with no added sugar.',
      featured: false,
    },
    {
      id: 11,
      name: 'Fresh Pineapple',
      category: 'fresh',
      image: '/images/hero-pic-2.jpg',
      price: '$5.49',
      unit: 'each',
      description: 'Sweet and tangy pineapple, rich in vitamins and minerals.',
      featured: false,
    },
    {
      id: 12,
      name: 'Organic Fruit Basket',
      category: 'fresh organic',
      image: '/images/hero-pic-3.jpg',
      price: '$24.99',
      unit: 'per basket',
      description: 'Assorted organic fruits arranged in a beautiful basket, perfect for gifting.',
      featured: true,
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category.includes(activeCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explore-page">
      {/* Hero Section */}
      <section className="explore-hero-section">
        <div className="container">
          <h1>Explore Our Products</h1>
          <p>Discover our wide range of fresh fruits and fruit products</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section">
        <div className="container">
          <div className="products-filters">
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="search-filter">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  {product.featured && <div className="featured-badge">Featured</div>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">
                      <span className="price">{product.price}</span>
                      <span className="unit">{product.unit}</span>
                    </div>
                    <button className="btn product-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products found matching your criteria. Please try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Products</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaCertificate size={40} color="#4caf50" />
              </div>
              <h3>Premium Quality</h3>
              <p>We source only the best fruits to ensure premium quality in every product.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaLeaf size={40} color="#43a047" />
              </div>
              <h3>Organic Options</h3>
              <p>Many of our products are certified organic, grown without harmful chemicals.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaAppleAlt size={40} color="#ff9800" />
              </div>
              <h3>Nutritional Value</h3>
              <p>Our products are packed with essential vitamins and minerals for your health.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaRecycle size={40} color="#009688" />
              </div>
              <h3>Eco-Friendly Packaging</h3>
              <p>We use sustainable packaging solutions to minimize environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="section bulk-orders-section">
        <div className="container">
          <div className="bulk-orders-content">
            <div className="bulk-orders-text">
              <h2>Bulk Orders for Businesses</h2>
              <p>
                Are you a restaurant, hotel, or retailer looking for regular fruit supplies? We offer special pricing and delivery options for bulk orders.
              </p>
              <ul className="bulk-benefits">
                <li>Competitive wholesale pricing</li>
                <li>Consistent quality and supply</li>
                <li>Flexible delivery schedules</li>
                <li>Dedicated account manager</li>
                <li>Customized packaging options</li>
              </ul>
              <button className="btn">Contact for Bulk Orders</button>
            </div>
            <div className="bulk-orders-image">
              <img src="images/bulk-order-image.jpg" alt="Bulk order image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;