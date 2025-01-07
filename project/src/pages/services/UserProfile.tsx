import React from 'react';
import { gradients } from '../../styles/gradients';

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="User Profile Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${gradients.overlay}`}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            数字化用户画像
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            通过数据分析和人工智能技术，深入理解您的目标用户，为精准营销提供有力支持
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">精准洞察用户需求</h2>
              <p className="text-gray-600 mb-8">
                我们运用先进的数据分析技术，收集和分析用户行为数据，构建全方位的用户画像。
                通过深度学习算法，我们能够准确预测用户偏好和行为趋势，为您的营销决策提供
                科学依据。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">多维度数据采集与分析</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">AI驱动的用户行为预测</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">实时用户画像更新</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data Analysis"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">数据分析</h3>
              <p className="text-gray-600">
                采用先进的数据分析技术，从海量数据中提取有价值的用户信息。
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">实时监测</h3>
              <p className="text-gray-600">
                实时监测用户行为变化，及时更新用户画像，确保营销决策的时效性。
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">精准营销</h3>
              <p className="text-gray-600">
                基于用户画像进行精准营销推送，提高营销效果和转化率。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
