import React from 'react';
import { COMPANY_INFO } from '../../constants/company';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { gradients } from '../../styles/gradients';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${gradients.overlay}`}></div>
      </div>
      
      {/* Content */}
      <Container className="relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
              
              <span className={`block mt-2 text-transparent bg-clip-text ${gradients.primary}`}>
                {COMPANY_INFO.slogan}
              </span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-fadeIn">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className={`${gradients.primary}`} onClick={handleServicesClick}>
                了解更多
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10" onClick={handleContactClick}>
                联系我们
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img 
                src="/images/bg1.png"
                alt="Digital Innovation"
                className="relative opacity-50 rounded-lg shadow-2xl animate-fadeIn"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;