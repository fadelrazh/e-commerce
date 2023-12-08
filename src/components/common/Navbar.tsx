// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faSquareMinus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" style={{ backgroundColor: 'transparent', color: 'black' }} />
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="/">
            <img src={process.env.PUBLIC_URL + "/assets/images/shopify.png"} alt="Home" />
          </a>
        </li>
        <li>
          <Link to="/product">Wanita</Link>
        </li>
        <li>
          <Link to="/cart">Pria</Link>
        </li>
        <li>
          <Link to="/cart">Luxury</Link>
        </li>
        <li>
          <Link to="/cart">Sports</Link>
        </li>
        <li>
          <Link to="/cart">Beauty</Link>
        </li>
        <li>
          <Link to="/login">Anak</Link>
        </li>
        <li>
          <Link to="/register">Home & Lifestyle</Link>
        </li>
        <li>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} size="2x" style={{ backgroundColor: 'transparent', color: 'white' }} />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faHeart} size="2x" style={{ backgroundColor: 'transparent', color: 'white' }}  />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FontAwesomeIcon icon={faSquareMinus} size="2x" style={{ backgroundColor: 'transparent', color: 'white' }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
