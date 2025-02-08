import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Fast Growth",
      description: "Accelerate your business growth with our proven strategies and tools"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Connect with customers and partners from around the world"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Stay ahead with cutting-edge digital solutions and features"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose EBNBIZNET?
          </h2>
          <p className="features-description">
            We provide comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;