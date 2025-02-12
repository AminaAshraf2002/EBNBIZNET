import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/ebnbznet.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Categories', link: '/categories-page' },
    { name: 'Contact', link: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className={`header-wrapper ${isScrolled ? 'header-wrapper-scrolled' : ''}`}>
          {/* Logo */}
          <Link to="./assets/ebnbznet.png" className="header-logo">
            
            <img src={logoImage} alt="EBNBIZNET Logo" className="header-logo-image" />
            <span className="header-brand-text">EBNBIZNET</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-desktop-nav">
            <div className="header-nav-links">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="header-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <div className="header-cta-buttons">
              <Link to="/register" className="header-cta-button register-btn">
                Register
              </Link>
              <Link to="/login" className="header-cta-button login-btn">
                Login
              </Link>
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="header-mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-nav">
            <nav className="header-mobile-nav-content">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="header-mobile-nav-link"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/register" 
                className="header-mobile-cta-button register-btn"
                onClick={toggleMenu}
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className="header-mobile-cta-button login-btn"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;