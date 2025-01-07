import React from 'react';
import { COMPANY_INFO } from '../../constants/company';
import Container from '../ui/Container';
import { gradients } from '../../styles/gradients';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      <Container className="relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Technology Team"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              关于
              <span className={`text-transparent bg-clip-text ${gradients.primary}`}>
                {COMPANY_INFO.name}
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              哈嘛数媒成立于2024年，是一家专注于数字化营销领域技术创新的企业。
              我们拥有富有经验和创造力的设计团队和技术团队，致力于为客户提供最具创意的数字化营销解决方案。
            </p>
            <div className="grid grid-cols-2 gap-6">
              {COMPANY_INFO.stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-100">
                  <h4 className={`text-3xl font-bold text-transparent bg-clip-text ${gradients.primary} mb-2`}>
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;