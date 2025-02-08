import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    MapPin,
    Phone,
    Mail,
    ExternalLink
} from 'lucide-react';
import contactFormBg from '../assets/call2.jpg';
import './ContactPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <>
            <Header />
            <div className="ebnbiznet-contact-page">
                {/* Hero Section */}
                <div className="contact-page-hero" data-aos="fade-in">
                    <div className="contact-hero-overlay"></div>
                    <div className="contact-hero-content">
                        <h1>Contact Us</h1>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="contact-page-info" data-aos="fade-up">
                    <div className="contact-info-cards">
                        <div className="contact-info-card" data-aos="fade-right">
                            <MapPin className="contact-info-icon" />
                            <h3>Our Address</h3>
                            <p>New York, United States</p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <ExternalLink size={16} /> View on Map
                            </a>
                        </div>
                        <div className="contact-info-card" data-aos="fade-up">
                            <Phone className="contact-info-icon" />
                            <h3>Phone Number</h3>
                            <p>+1 (800) EBNBIZ-NET</p>
                            <a
                                href="tel:+18002326294"
                                className="contact-link"
                            >
                                <ExternalLink size={16} /> Call Us
                            </a>
                        </div>
                        <div className="contact-info-card" data-aos="fade-left">
                            <Mail className="contact-info-icon" />
                            <h3>Email Address</h3>
                            <p>support@ebnbiznet.com</p>
                            <a
                                href="mailto:support@ebnbiznet.com"
                                className="contact-link"
                            >
                                <ExternalLink size={16} /> Send Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="contact-page-form" data-aos="fade-up">
                    <div className="contact-form-container">
                        <div
                            className="contact-form-left"
                            style={{ backgroundImage: `url(${contactFormBg})` }}
                        />

                        <div className="contact-form-right">
                            <div className="contact-form-title">
                                <h2>Contact Us</h2>
                            </div>

                            <div className="contact-form-header">
                                <h3><span className="contact-highlight">Reach</span> & Get In Touch With Us!</h3>
                                <p>Register your business and unlock global opportunities</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="contact-form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="contact-form-row">
                                    <input
                                        type="tel"
                                        name="number"
                                        placeholder="Your Number"
                                        value={formData.number}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Your Subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;