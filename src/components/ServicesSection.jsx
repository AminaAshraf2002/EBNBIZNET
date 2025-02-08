import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Flower2, Monitor, BarChart2, Users } from 'lucide-react';
import './ServicesSection.css';
import image1 from '../assets/listing.jpg'
import image2 from '../assets/digital.webp'
import image3 from '../assets/market.webp'


const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Flower2 size={40} />,
      title: "Business Listing",
      description: "Get your business listed on our platform and reach potential customers worldwide",
      features: ["Global visibility", "Detailed profiles", "Analytics dashboard"],
      image: image1,
      
    },
    {
      icon: <Monitor size={40} />,
      title: "Digital Marketing",
      description: "Boost your online presence with our digital marketing solutions",
      features: ["SEO optimization", "Social media", "Content strategy"],
      image: image2,
      bgColor: "#2196F3"
    },
    {
      icon: <BarChart2 size={40} />,
      title: "Market Analysis",
      description: "Make informed decisions with our detailed market analysis tools",
      features: ["Data analytics", "Market insights", "Competitor analysis"],
      image: image3,
      bgColor: "#FF5722"
    }
  ];

  const handleCardClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${activeService === index ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div 
                className="service-content"
                style={{
                  backgroundImage: `url(${service.image})`
                }}
              >
                <div className="service-overlay">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="service-feature">
                        <ChevronRight className="feature-icon" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="read-more-btn">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;