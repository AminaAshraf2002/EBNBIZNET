import React from 'react';
import './AboutSection.css';
import about1 from '../assets/about2.jpg'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src={about1} 
              alt="About Us"
              className="about-image"
            />
            <div className="experience-badge">
              <p className="font-bold text-2xl">5+</p>
              <p>Years of Excellence</p>
            </div>
          </div>
          
          <div className="about-text">
            <h2 className="about-title">About EBNBIZNET</h2>
            <p className="about-description">
              EBNBIZNET is a leading global business promotion platform dedicated to helping 
              businesses grow and succeed in the digital age. We've helped thousands of 
              businesses expand their reach and achieve their goals.
            </p>
            <div className="mission-vision-grid">
              {[
                {
                  title: "Our Mission",
                  content: "To empower businesses worldwide with innovative digital solutions"
                },
                {
                  title: "Our Vision",
                  content: "To become the world's leading platform for business growth and success"
                }
              ].map((item, index) => (
                <div key={index} className="mission-card">
                  <h3 className="mission-card-title">
                    <span className="mission-card-number">0{index + 1}.</span>
                    {item.title}
                  </h3>
                  <p className="mission-card-content">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {[
            { number: "1000+", label: "Active Users", icon: "👥" },
            { number: "50+", label: "Countries", icon: "🌍" },
            { number: "95%", label: "Success Rate", icon: "📈" },
            { number: "24/7", label: "Support", icon: "💪" }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;