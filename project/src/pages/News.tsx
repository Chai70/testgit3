import React, { useState, useEffect } from 'react';
import Container from '../components/ui/Container';
import { gradients } from '../styles/gradients';
import { newsItems } from '../constants/news';
import '../styles/animations.css';

const News: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="News Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${gradients.overlay}`}></div>
        </div>
        <Container className="relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            新闻动态
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            了解我们最新的公司动态、产品发布和行业新闻
          </p>
        </Container>
      </section>

      {/* News Carousel Section */}
      <section className="flex-grow py-16 bg-white">
        <Container>
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              {newsItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
                    index === activeSlide ? 'translate-x-0' : index < activeSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <div className="relative h-full bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="relative z-10 h-full flex items-end">
                      <div className="w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
                        <div className="max-w-3xl">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-blue-400">{formatDate(item.date)}</span>
                            <div className="flex gap-2">
                              {item.tags?.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
                          <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.summary}</p>
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            阅读更多
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-blue-500' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* News List */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                    {item.tags?.[0] && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                        {item.tags[0]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis line-clamp-2">{item.summary}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    继续阅读 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default News;
