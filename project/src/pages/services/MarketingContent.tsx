import React from 'react';
import { gradients } from '../../styles/gradients';

const MarketingContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80"
            alt="Marketing Content Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${gradients.overlay}`}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            数字化营销内容
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            创造富有吸引力的数字营销内容，提升品牌影响力，实现营销目标
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Content Strategy Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">内容策略规划</h2>
              <p className="text-gray-600 mb-8">
                我们提供全方位的内容营销策略，从内容规划到创作执行，
                帮助您建立强大的品牌声音，吸引目标受众，提升转化率。
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">01</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">内容规划</h3>
                    <p className="text-gray-600">制定符合品牌调性的内容策略和创作方向</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">02</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">创意制作</h3>
                    <p className="text-gray-600">专业的创意团队，打造优质的营销内容</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">03</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">效果优化</h3>
                    <p className="text-gray-600">持续监测和优化内容效果，提升营销ROI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80"
                alt="Content Strategy"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">文案创作</h3>
              <p className="text-gray-600">
                专业的文案团队，创作引人入胜的营销文案，传递品牌价值。
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">视频制作</h3>
              <p className="text-gray-600">
                高质量的视频内容制作，让品牌故事更具感染力。
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">图片设计</h3>
              <p className="text-gray-600">
                专业的设计团队，创作视觉冲击力强的营销图片。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingContent;
