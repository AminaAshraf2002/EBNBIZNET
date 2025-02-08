import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Building2, 
  Target, 
  Users,
  BarChart2,
  Globe,
  CreditCard,
  CheckCircle,
  Award
} from 'lucide-react';
import './AboutPage.css';
import image1 from '../assets/about4.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const platformFeatures = [
    {
      icon: <Globe />,
      title: "Global Reach",
      description: "Connect with businesses worldwide through our international platform"
    },
    {
      icon: <CreditCard />,
      title: "Commission Based",
      description: "Pay only when you succeed - commission charged on successful sales"
    },
    {
      icon: <Users />,
      title: "Membership Tiers",
      description: "Three flexible membership categories based on business turnover"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "Incorporated in New York as a global business platform"
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Launched commission-based business promotion model"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Extended platform reach to international markets"
    },
    {
      year: "2022",
      title: "Membership Tiers",
      description: "Introduced tailored membership categories"
    },
    {
      year: "2023",
      title: "Platform Enhancement",
      description: "Advanced features and improved user experience"
    }
  ];

  return (
    <>
      <Header />
      <div className="aboutpage">
        {/* Hero Section */}
        <section className="aboutpage-hero">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-up">
              <h1>About EBNBIZNET</h1>
              <p>Your Global Business Promotion Platform</p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="company-overview">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text" data-aos="fade-right">
                <h2>Global Business Platform</h2>
                <p>
                  EBNBIZNET.COM is a leading global business promotion platform, established 
                  in New York to revolutionize how businesses connect and grow. Our platform 
                  enables businesses worldwide to showcase their products and services with zero 
                  upfront costs, operating on a success-based commission model.
                </p>
                <div className="overview-features">
                  <div className="feature">
                    <CheckCircle className="feature-icon" />
                    <span>Free business registration and listing</span>
                  </div>
                  <div className="feature">
                    <CheckCircle className="feature-icon" />
                    <span>Commission only on successful sales</span>
                  </div>
                  <div className="feature">
                    <CheckCircle className="feature-icon" />
                    <span>Turnover-based membership tiers</span>
                  </div>
                </div>
              </div>
              <div className="overview-image" data-aos="fade-left">
                <img src={image1} alt="EBNBIZNET Platform" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-card" data-aos="fade-up">
                <Target className="card-icon" />
                <h3>Our Mission</h3>
                <p>
                  To provide a global platform that empowers businesses of all sizes to 
                  showcase their products and services, enabling growth through a fair and 
                  transparent commission-based model.
                </p>
              </div>
              <div className="vision-card" data-aos="fade-up" data-aos-delay="100">
                <Globe className="card-icon" />
                <h3>Our Vision</h3>
                <p>
                  To become the world's leading business promotion platform, creating 
                  opportunities for businesses to thrive in the global marketplace through 
                  innovative and accessible solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Operation */}
        <section className="platform-operation">
          <div className="container">
            <h2 data-aos="fade-up">How Our Platform Works</h2>
            <div className="operation-features">
              {platformFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="operation-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="operation-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="company-timeline">
          <div className="container">
            <h2 data-aos="fade-up">Our Journey</h2>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-content">
                    <span className="year">{milestone.year}</span>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;