import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialsSection.css';
import image1 from '../assets/people1.jpg'
import image2 from '../assets/people2.png'
import image3 from '../assets/people.jpg'
import image4 from '../assets/people4.jpg'
import image5 from '../assets/people5.jpg'





const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Solutions",
      content: "EBNBIZNET has transformed how we reach new customers. The platform is intuitive and powerful.",
      image: image1,
      rating: 5
    },
    {
      name: "John Smith",
      role: "Marketing Director",
      content: "The best business platform we've used. It's helped us expand into new markets effortlessly.",
      image: image2,
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      content: "Outstanding platform with great features. Our business has grown significantly since joining.",
      image: image3,
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      content: "A game-changing solution that has dramatically improved our online presence and sales.",
      image: image4,
      rating: 5
    },
    {
      name: "Sayra Kim",
      role: "Digital Strategist",
      content: "Comprehensive tools that provide real insights and drive business growth.",
      image: image5,
      rating: 5
    }
  ];

  // Duplicate testimonials to create seamless loop
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-marquee-section">
      <div className="testimonials-header-container">
        <div className="testimonials-header-content">
          <div className="testimonials-header-icon">
            <Quote size={48} strokeWidth={1.5} className="text-orange-500" />
          </div>
          <h2 className="testimonials-main-title">
            Hear From Our Valued Clients
          </h2>
          <p className="testimonials-subtitle">
            Real Stories, Real Success
          </p>
          <div className="testimonials-header-divider"></div>
        </div>
      </div>

      <div className="testimonials-marquee-container">
        <div className="testimonials-marquee-track">
          {repeatedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-marquee-card"
            >
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-marquee-image"
              />
              
              <div className="testimonial-marquee-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="text-yellow-400"
                    size={20}
                    fill="#ffc107"
                  />
                ))}
              </div>
              
              <p className="testimonial-marquee-quote">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="testimonial-marquee-author-name">
                  {testimonial.name}
                </p>
                <p className="testimonial-marquee-author-role">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;