import React, { useState } from 'react';
import { 
  Globe, 
  Star, 
  Shield, 
  Zap, 
  TrendingUp, 
  Target,
  Check,
  ArrowRight,
  Award,
  BarChart2,
  ShieldCheck
} from 'lucide-react';
import './BenefitsOverview.css';

// Interactive Illustration Component
const InteractiveIllustration = ({ activeTab }) => {
  const illustrations = [
    {
      icon: <Globe className="illustration-icon" />,
      title: "Global Marketplace",
      description: "Connecting businesses worldwide"
    },
    {
      icon: <TrendingUp className="illustration-icon" />,
      title: "Growth Acceleration",
      description: "Scaling your business potential"
    },
    {
      icon: <ShieldCheck className="illustration-icon" />,
      title: "Complete Security",
      description: "Protecting your business interests"
    }
  ];

  const currentIllustration = illustrations[activeTab];

  return (
    <div className="benefits-illustration-content">
      <div className="illustration-placeholder">
        {currentIllustration.icon}
        <h4>{currentIllustration.title}</h4>
        <p>{currentIllustration.description}</p>
      </div>
    </div>
  );
};

const BenefitsOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefitTabs = [
    {
      icon: <Globe className="benefit-tab-icon" />,
      title: "Global Marketplace",
      description: "Expand your business reach across international markets with our comprehensive platform.",
      features: [
        "Worldwide Business Exposure",
        "Cross-Border Trade Opportunities",
        "Multilingual Support",
        "International Payment Solutions"
      ],
      benefits: [
        "Connect with global customers",
        "Reduce market entry barriers",
        "Leverage international networking"
      ]
    },
    {
      icon: <TrendingUp className="benefit-tab-icon" />,
      title: "Growth Acceleration",
      description: "Unlock unprecedented business growth through advanced digital tools and strategies.",
      features: [
        "Advanced Analytics",
        "Marketing Optimization",
        "Sales Funnel Enhancement",
        "Business Intelligence"
      ],
      benefits: [
        "Increase revenue streams",
        "Improve market positioning",
        "Data-driven decision making"
      ]
    },
    {
      icon: <Shield className="benefit-tab-icon" />,
      title: "Complete Security",
      description: "Protect your business with enterprise-grade security and comprehensive risk management.",
      features: [
        "Secure Transactions",
        "Fraud Prevention",
        "Data Protection",
        "Compliance Management"
      ],
      benefits: [
        "Minimize financial risks",
        "Ensure customer trust",
        "Maintain business reputation"
      ]
    }
  ];

  return (
    <section className="benefits-overview-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">
            Why Choose EBNBIZNET?
          </h2>
          <p className="benefits-subtitle">
            Empowering Your Business with Comprehensive Solutions
          </p>
        </div>

        <div className="benefits-content">
          <div className="benefits-tabs">
            {benefitTabs.map((tab, index) => (
              <button
                key={index}
                className={`benefits-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                <span className="benefits-tab-title">{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="benefits-details">
            <div className="benefits-details-content">
              <h3 className="benefits-details-title">
                {benefitTabs[activeTab].title}
              </h3>
              <p className="benefits-details-description">
                {benefitTabs[activeTab].description}
              </p>

              <div className="benefits-features">
                <h4>Key Features</h4>
                <ul>
                  {benefitTabs[activeTab].features.map((feature, index) => (
                    <li key={index}>
                      <Check className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="benefits-highlights">
                <h4>Business Benefits</h4>
                <ul>
                  {benefitTabs[activeTab].benefits.map((benefit, index) => (
                    <li key={index}>
                      <Star className="highlight-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="benefits-cta-button">
                Learn More
                <ArrowRight className="button-icon" />
              </button>
            </div>

            <div className="benefits-illustration">
              <InteractiveIllustration activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOverview;