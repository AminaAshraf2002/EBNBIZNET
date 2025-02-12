import React from 'react';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  Instagram as InstagramIcon,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', link: '#about' },
      { name: 'Our Team', link: '#team' },
      { name: 'Careers', link: '#careers' },
      { name: 'Contact', link: '#contact' }
    ],
    services: [
      { name: 'Business Listing', link: '#listing' },
      { name: 'Digital Marketing', link: '#marketing' },
      { name: 'Consulting', link: '#consulting' },
      { name: 'Analytics', link: '#analytics' }
    ],
    legal: [
      { name: 'Privacy Policy', link: '#privacy' },
      { name: 'Terms of Service', link: '#terms' },
      { name: 'Cookie Policy', link: '#cookies' }
    ],
    social: [
      { name: 'Facebook', icon: FacebookIcon, link: '#facebook' },
      { name: 'Twitter', icon: TwitterIcon, link: '#twitter' },
      { name: 'LinkedIn', icon: LinkedinIcon, link: '#linkedin' },
      { name: 'Instagram', icon: InstagramIcon, link: '#instagram' }
    ],
    contact: [
      {
        icon: MapPin,
        content: '4th floor , dd vapara bhavan kp vallon road 682020',
        link: 'https://maps.google.com/?q=4th floor , dd vapara bhavan kp vallon road 682020'
      },
      {
        icon: Phone,
        content: '98958111118',
        link: 'tel:98958111118'
      },
      {
        icon: Mail,
        content: 'hello@ebnbiznet.com',
        link: 'mailto:hello@ebnbiznet.com'
      }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-company-info">
              <h3 className="footer-brand">EBNBIZNET</h3>
              <p className="footer-description">
                Empowering businesses worldwide through innovative digital solutions.
                Your trusted partner in business growth and success.
              </p>
              <div className="footer-social-icons">
                {footerLinks.social.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      className="footer-social-link"
                      aria-label={social.name}
                    >
                      <SocialIcon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-section">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.link} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links-section">
              <h4 className="footer-links-title">Services</h4>
              <ul className="footer-links">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.link} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-links-section">
              <h4 className="footer-links-title">Contact Us</h4>
              <ul className="footer-contact-info">
                {footerLinks.contact.map((item, index) => {
                  const ContactIcon = item.icon;
                  return (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="footer-contact-item"
                        target={item.icon === MapPin ? "_blank" : "_self"}
                        rel={item.icon === MapPin ? "noopener noreferrer" : ""}
                      >
                        <ContactIcon size={20} className="footer-contact-icon" />
                        <span>{item.content}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4 className="newsletter-title">Subscribe to Our Newsletter</h4>
            <p className="newsletter-description">
              Stay updated with the latest business trends and opportunities
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} EBNBIZNET. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="footer-bottom-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;