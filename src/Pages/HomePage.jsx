import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import FeaturedBusinessCarousel from '../components/FeaturedBusinessCarousel';
import MembershipCategories from '../components/MembershipCategories';
import BenefitsOverview from '../components/BenefitsOverview';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedBusinessCarousel/>
      <ServicesSection />
      <MembershipCategories/>
      <TestimonialsSection />
      <BenefitsOverview/>
      <Footer />
    </div>
  );
};

export default HomePage;