import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
    Search,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import './CategoriesPage.css'
import imag1 from '../assets/tech1.jpg'
import imag2 from '../assets/tech2.jpeg'
import imag3 from '../assets/tech3.webp'
import img1 from '../assets/global1.jpg'
import img2 from '../assets/global2.jpeg'
import img3 from '../assets/global3.jpg'
import image1 from '../assets/fin1.jpg'
import image2 from '../assets/fin2.webp'
import image3 from '../assets/fin3.avif'
import retail1 from '../assets/reat.webp'
import retail2 from '../assets/reat2.jpg'
import retail3 from '../assets/reat4.jpg'
import manu1 from '../assets/manu1.jpg'
import manu2 from '../assets/manu2.jpg'
import manu3 from '../assets/manu3.jpg'
import edu1 from '../assets/edu.webp'
import edu2 from '../assets/edu1.jpg'
import edu3 from '../assets/edu2.webp'
import end1 from '../assets/end1.jpg'
import end2 from '../assets/end2.jpg'
import end3 from '../assets/end3.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';


const CategoriesPage = () => {
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedMembership, setSelectedMembership] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showAllIndustries, setShowAllIndustries] = useState(false);

    const industries = [
        'Technology', 'Healthcare', 'Finance',
        'Retail', 'Manufacturing', 'Education',
        'Entertainment'
    ];

    const membershipTiers = [
        'Startup', 'Growth', 'Enterprise'
    ];

    const businessListings = [
        {
            id: 1,
            name: 'Tech Innovators Inc.',
            industry: 'Technology',
            membership: 'Enterprise',
            description: 'Cutting-edge tech solutions for global businesses',
            images: [imag1, imag2, imag3]
        },
        {
            id: 2,
            name: 'Global Health Solutions',
            industry: 'Healthcare',
            membership: 'Growth',
            description: 'Innovative healthcare management platforms',
            images: [img1, img2, img3]
        },
        {
            id: 3,
            name: 'FinTech Innovations',
            industry: 'Finance',
            membership: 'Enterprise',
            description: 'Advanced financial technology solutions',
            images: [image1, image2, image3]
        },
        {
            id: 4,
            name: 'Retail Revolution',
            industry: 'Retail',
            membership: 'Growth',
            description: 'E-commerce and retail strategy experts',
            images: [retail1, retail2, retail3]
        },
        {
            id: 5,
            name: 'Smart Manufacturing',
            industry: 'Manufacturing',
            membership: 'Enterprise',
            description: 'Innovative manufacturing solutions',
            images: [manu1, manu2, manu3]
        },
        {
            id: 6,
            name: 'EduTech Solutions',
            industry: 'Education',
            membership: 'Startup',
            description: 'Educational technology and e-learning platforms',
            images: [edu1, edu2, edu3]
        },
        {
            id: 8,
            name: 'Entertainment Innovators',
            industry: 'Entertainment',
            membership: 'Enterprise',
            description: 'Creative entertainment business strategies',
            images: [end1, end2, end3]
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const handleIndustryToggle = (industry) => {
        setSelectedIndustries(prev =>
            prev.includes(industry)
                ? prev.filter(i => i !== industry)
                : [...prev, industry]
        );
    };

    const filteredListings = businessListings.filter(listing =>
        (selectedIndustries.length === 0 || selectedIndustries.includes(listing.industry)) &&
        (selectedMembership === '' || listing.membership === selectedMembership) &&
        (searchTerm === '' || listing.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            <Header />
            <div className="category-page">
                {/* Hero Section */}
                <div className="category-hero-section">
                    <div className="category-hero-overlay"></div>
                    <div className="category-hero-content" data-aos="fade-up">
                        <h1>Business Categories</h1>
                        <p>Discover and Connect with Global Businesses</p>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="category-search-filter-section">
                    <div className="category-search-container">
                        <input
                            type="text"
                            placeholder="Search businesses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="search-icon" />
                    </div>
                </div>

                <div className="category-content-section">
                    {/* Sidebar Filters */}
                    <div className="category-sidebar" data-aos="fade-right">
                        <div className="category-filter-section">
                            <h3>Industries</h3>
                            <label className="category-checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedIndustries.length === industries.length}
                                    onChange={() => {
                                        setSelectedIndustries(
                                            selectedIndustries.length === industries.length ? [] : [...industries]
                                        );
                                    }}
                                />
                                All Industries
                            </label>
                            {industries.map(industry => (
                                <label key={industry} className="category-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectedIndustries.includes(industry)}
                                        onChange={() => handleIndustryToggle(industry)}
                                    />
                                    {industry}
                                </label>
                            ))}
                        </div>

                        <div className="category-filter-section">
                            <h3>Membership Tiers</h3>
                            {membershipTiers.map(tier => (
                                <label key={tier} className="category-radio">
                                    <input
                                        type="radio"
                                        name="membership"
                                        checked={selectedMembership === tier}
                                        onChange={() => setSelectedMembership(tier)}
                                    />
                                    {tier}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Business Listings */}
                    <div className="category-listings" data-aos="fade-left">
                        {filteredListings.map(listing => (
                            <div key={listing.id} className="category-listing-card">
                                <Carousel
                                    showThumbs={false}
                                    showStatus={false}
                                    infiniteLoop
                                    autoPlay
                                    interval={3000}
                                    renderArrowPrev={(onClickHandler, hasPrev) => (
                                        hasPrev && (
                                            <button
                                                onClick={onClickHandler}
                                                className="carousel-arrow carousel-arrow-prev"
                                            >
                                                <ChevronLeft />
                                            </button>
                                        )
                                    )}
                                    renderArrowNext={(onClickHandler, hasNext) => (
                                        hasNext && (
                                            <button
                                                onClick={onClickHandler}
                                                className="carousel-arrow carousel-arrow-next"
                                            >
                                                <ChevronRight />
                                            </button>
                                        )
                                    )}
                                >
                                    {listing.images.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} alt={`${listing.name} - Image ${index + 1}`} />
                                        </div>
                                    ))}
                                </Carousel>
                                <div className="category-listing-details">
                                    <h3>{listing.name}</h3>
                                    <p>{listing.description}</p>
                                    <div className="category-listing-tags">
                                        <span>{listing.industry}</span>
                                        <span>{listing.membership} Tier</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="category-pagination">
                    <button>Previous</button>
                    <span>Page 1 of 2</span>
                    <button>Next</button>
                </div>

            </div>
            <Footer />
        </>

    );
};

export default CategoriesPage;