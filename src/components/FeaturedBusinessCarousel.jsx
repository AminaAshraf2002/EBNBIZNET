import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  MapPin, 
  Star,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import './FeaturedBusinessCarousel.css';

// Import business images
import techInnovateImage from '../assets/tech0.jpg';
import greenEcoImage from '../assets/business2.jpg';
import globalTradeImage from '../assets/glo.webp';

// Import logo images
import techInnovateLogo from '../assets/techlogo.jpg';
import greenEcoLogo from '../assets/eco.jpg';
import globalTradeLogo from '../assets/globlogo.jpg';

const FeaturedBusinessCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredBusinesses = [
    {
      name: "TechInnovate Solutions",
      industry: "Technology",
      location: "San Francisco, CA",
      description: "Pioneering AI-driven business solutions for enterprise-level challenges.",
      logo: techInnovateLogo,
      image: techInnovateImage,
      achievements: [
        "Best Emerging Tech Company 2023",
        "100% Client Satisfaction Rating",
        "Rapid Scaling in Silicon Valley"
      ]
    },
    {
      name: "GreenEco Enterprises",
      industry: "Sustainability",
      location: "Portland, OR",
      description: "Leading sustainable business practices and eco-friendly product development.",
      logo: greenEcoLogo,
      image: greenEcoImage,
      achievements: [
        "Carbon Neutral Certification",
        "Innovation in Green Technology",
        "Multiple Environmental Awards"
      ]
    },
    {
      name: "GlobalTrade Network",
      industry: "International Commerce",
      location: "New York, NY",
      description: "Connecting businesses across continents with seamless trading solutions.",
      logo: globalTradeLogo,
      image: globalTradeImage,
      achievements: [
        "Fastest Growing Trade Platform",
        "Multinational Business Connections",
        "Innovative Cross-Border Solutions"
      ]
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featuredBusinesses.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => 
      prev === 0 ? featuredBusinesses.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>Featured Businesses</h2>
        <p>Showcasing Innovative Companies on EBNBIZNET</p>
      </div>

      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featuredBusinesses.map((business, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={business.image} 
                alt={business.name}
                className="slide-background"
              />
              <div className="slide-overlay"></div>
              
              <div className="content-card">
                <div className="card-header">
                  <img 
                    src={business.logo} 
                    alt={`${business.name} logo`}
                    className="company-logo"
                  />
                  <h3>{business.name}</h3>
                </div>
                
                <div className="company-info">
                  <div className="info-item">
                    <Globe />
                    <span>{business.industry}</span>
                  </div>
                  <div className="info-item">
                    <MapPin />
                    <span>{business.location}</span>
                  </div>
                </div>
                
                <p className="company-description">{business.description}</p>
                
                <div className="achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {business.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <Star />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="view-profile">
                  View Profile
                  <ArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-nav prev" onClick={prevSlide}>
          <ArrowLeft />
        </button>
        <button className="carousel-nav next" onClick={nextSlide}>
          <ArrowRight />
        </button>

        <div className="carousel-indicators">
          {featuredBusinesses.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinessCarousel;