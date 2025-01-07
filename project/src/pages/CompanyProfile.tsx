import React from 'react';
import { COMPANY_INFO } from '../constants/company';
import Container from '../components/ui/Container';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';
import { gradients } from '../styles/gradients';

const CompanyProfile:React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${gradients.overlay}`}></div>
        </div>
        <Container className="relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            公司简介
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {COMPANY_INFO.description}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text ${gradients.primary}`}>
                我们的故事
              </h2>
              <p className="text-gray-600 mb-8">
                在这个快速发展的数字时代，我们始终坚持以创新为驱动，以客户需求为导向，
                致力于为企业提供全方位的数字化营销解决方案。
              </p>

              <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text ${gradients.primary}`}>
                我们的使命
              </h2>
              <p className="text-gray-600 mb-8">
                通过数字化转型助力企业实现可持续发展，打造具有竞争力的品牌形象，
                为客户创造更大的商业价值。
              </p>

              <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text ${gradients.primary}`}>
                我们的愿景
              </h2>
              <p className="text-gray-600 mb-8">
                成为数字化营销领域的领军企业，引领行业发展，推动数字经济的繁荣。
              </p>

              {/* 这里可以根据需要添加更多的内容 */}
            </div>
          </div>
        </Container>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default CompanyProfile;
