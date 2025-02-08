import React, { useState } from 'react';
import { 
  Award, 
  Star, 
  Rocket, 
  CheckCircle, 
  Globe, 
  TrendingUp 
} from 'lucide-react';
import './MembershipCategories.css';

const MembershipCategories = () => {
  const [activeCard, setActiveCard] = useState(null);

  const membershipTiers = [
    {
      title: "Starter Tier",
      icon: <Star className="membership-card-icon" />,
      monthlyFee: 0,
      commissionRate: 10,
      features: [
        "Basic Business Listing",
        "Limited Marketplace Access",
        "Standard Support"
      ],
      description: "Perfect for small businesses and startups looking to establish their online presence."
    },
    {
      title: "Professional Tier",
      icon: <Rocket className="membership-card-icon" />,
      monthlyFee: 49,
      commissionRate: 7,
      features: [
        "Advanced Business Listing",
        "Full Marketplace Access",
        "Priority Support",
        "Marketing Tools"
      ],
      description: "Ideal for growing businesses seeking expanded visibility and advanced features."
    },
    {
      title: "Enterprise Tier",
      icon: <Award className="membership-card-icon" />,
      monthlyFee: 99,
      commissionRate: 5,
      features: [
        "Premium Business Listing",
        "Unlimited Marketplace Access",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "Custom Marketing Support"
      ],
      description: "Comprehensive solution for established businesses looking for maximum growth potential."
    }
  ];

  return (
    <section className="membership-categories-section">
      <div className="membership-categories-container">
        <div className="membership-header">
          <h2 className="membership-title">
            Membership Categories
          </h2>
          <p className="membership-subtitle">
            Choose the perfect plan that fits your business needs
          </p>
        </div>

        <div className="membership-grid">
          {membershipTiers.map((tier, index) => (
            <div 
              key={index}
              className={`membership-card ${activeCard === index ? 'active' : ''}`}
            >
              <div 
                className="membership-card-icon-container"
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                {tier.icon}
              </div>
              
              {activeCard === index && (
                <div className="membership-card-overlay">
                  <div className="membership-card-overlay-content">
                    <h3>{tier.title}</h3>
                    <ul>
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <CheckCircle className="feature-check-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p>{tier.description}</p>
                    <div className="membership-card-details">
                      <div className="membership-detail">
                        <Globe className="detail-icon" />
                        <span>Commission: {tier.commissionRate}%</span>
                      </div>
                      <div className="membership-detail">
                        <TrendingUp className="detail-icon" />
                        <span>Monthly Fee: ${tier.monthlyFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipCategories;