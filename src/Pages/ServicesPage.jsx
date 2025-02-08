import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesPage.css';
import image1 from '../assets/problem.jpg';
import image2 from '../assets/hours.avif';
import image3 from '../assets/grouth.jpg';
import image4 from '../assets/bg1.jpg';
import image5 from '../assets/consult2.webp';
import Header from '../components/Header';
import Footer from '../components/Footer';



import {
    ShieldCheck,
    Clock,
    Briefcase,
    TrendingUp,
    Users,
    Globe
} from 'lucide-react';

// Custom Icons
const FinancialIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12l-4.5 2.6v5.19"></polyline>
        <polyline points="3.27 6.96 12 12.01l8.73-5.05"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);

const SoftwareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
    </svg>
);

const QualityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9" />
        <path d="M12 12V9" />
        <path d="M12 17v2" />
    </svg>
);

const BusinessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

const HealthcareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 22v-6.57" />
        <path d="M12 11h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2" />
        <path d="M18 19c0 1.1-.9 2-2 2h-4v-3.57" />
        <path d="M8 12H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h3" />
    </svg>
);

const CountUp = ({ end, duration = 2000, separator = ',' }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        let startTimestamp = null;
        let shouldStop = false;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1 && !shouldStop) {
                window.requestAnimationFrame(step);
            }
        };

        if (inView) {
            window.requestAnimationFrame(step);
        }

        return () => {
            shouldStop = true;
        };
    }, [end, duration, inView]);

    // Format number with commas
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    };

    return (
        <div ref={ref}>
            {formatNumber(count)}
        </div>
    );
};

const ServicePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const serviceCards = [
        {
            image: image1,
            icon: ShieldCheck,
            title: "Every Problem Solution",
            description: "Comprehensive business support and problem-solving"
        },
        {
            image: image2,
            icon: Clock,
            title: "24/7 Customer Support",
            description: "Continuous assistance for your business needs"
        },
        {
            image: image3,
            icon: Briefcase,
            title: "Business Growth Strategies",
            description: "Continuous innovation and business expansion"
        }
    ];

    const membershipTiers = [
        {
            title: "Startup Tier",
            turnover: "Up to $50K",
            features: [
                "Basic Listing",
                "Limited Exposure",
                "Basic Analytics"
            ]
        },
        {
            title: "Growth Tier",
            turnover: "$50K - $250K",
            features: [
                "Enhanced Listing",
                "Advanced Exposure",
                "Detailed Analytics"
            ]
        },
        {
            title: "Enterprise Tier",
            turnover: "Over $250K",
            features: [
                "Premium Listing",
                "Global Exposure",
                "Comprehensive Analytics"
            ]
        }
    ];

    const beliefServices = [
        {
            Icon: FinancialIcon,
            title: "Financial Planning",
            description: "Strategic financial guidance"
        },
        {
            Icon: SoftwareIcon,
            title: "Software Research",
            description: "Innovative tech solutions"
        },
        {
            Icon: QualityIcon,
            title: "Quality Resourcing",
            description: "Top-tier business resources"
        },
        {
            Icon: BusinessIcon,
            title: "Business Services",
            description: "Comprehensive business support"
        },
        {
            Icon: HealthcareIcon,
            title: "Healthcare Services",
            description: "Specialized healthcare solutions"
        }
    ];

    const achievementsData = [
        {
            number: 6847,
            suffix: 'm',
            label: 'Happy Customers'
        },
        {
            number: 100,
            suffix: '%',
            label: 'Clients Satisfied'
        },
        {
            number: 3240,
            suffix: 'K',
            label: 'Projects Done'
        }
    ];

    return (
        <>
            <Header />
            <div className="ebnbiznet-service-page">
                {/* Hero Section */}
                <div className="service-hero-section">
                    <div className="service-hero-overlay"></div>
                    <div className="service-hero-content" data-aos="fade-up">
                        <h1>Our Services</h1>
                    </div>
                </div>

                {/* Start Your Business Section */}
                <div className="service-start-business-section">
                    <h2 data-aos="fade-up">Start Your Business With Us</h2>
                    <p data-aos="fade-up">Comprehensive Business Promotion Solutions</p>

                    <div className="service-business-cards" data-aos="fade-up">
                        {serviceCards.map((card, index) => (
                            <div key={index} className="service-business-card">
                                <img src={card.image} alt={card.title} />
                                <div className="service-card-content">
                                    <card.icon className="service-card-icon" />
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Customer Relationships Section */}
                <div className="service-customer-relationships-section">
                    <div className="service-relationships-content" data-aos="fade-right">
                        <h2>Grow Customer Relationships</h2>
                        <p>Looking for a First-Class Business Promotion Platform?</p>
                        <ul>
                            <li>Free business registration</li>
                            <li>Global business exposure</li>
                            <li>Zero upfront costs</li>
                        </ul>
                        <button>Read More</button>
                    </div>
                    <div className="service-relationships-images" data-aos="fade-left">
                        <div className="service-stat-badge">
                            <span>93%</span>
                            <p>Working Total Rating</p>
                        </div>
                        <img src={image4} alt="Business Meeting" />
                    </div>
                </div>

                {/* Membership Categories Section */}
                <div className="service-membership-section">
                    <h2 data-aos="fade-up">Membership Categories</h2>
                    <div className="service-membership-cards" data-aos="fade-up">
                        {membershipTiers.map((tier, index) => (
                            <div key={index} className="service-membership-card">
                                <h3>{tier.title}</h3>
                                <p>Annual Turnover: {tier.turnover}</p>
                                <ul>
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* We Believe Section */}
                <div className="service-belief-section">
                    <h2 data-aos="fade-up">We Believe We Will Be Successful If Our Clients Are Successful</h2>
                    <div className="service-belief-content" data-aos="fade-up">
                        <div className="service-belief-services">
                            {beliefServices.map((service, index) => (
                                <div key={index} className="service-belief-service">
                                    <service.Icon />
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="service-belief-image">
                            <img src={image5} alt="Business Consultation" />
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="service-achievements-section">
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className="service-achievement-card">
                            <h3>
                                <CountUp end={achievement.number} />
                                {achievement.suffix}
                            </h3>
                            <p>{achievement.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServicePage;