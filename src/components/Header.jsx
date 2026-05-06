import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Hossain Ali Food and Beverage Ltd" />
          <span>Hossain Ali Food and Beverage Ltd</span>
        </Link>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="primary-navigation" className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-brand" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Our Brand
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/explore" className={({ isActive }) => isActive ? 'active' : ''}>
                Explore
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
