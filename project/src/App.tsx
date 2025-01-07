import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CompanyProfile from './pages/CompanyProfile';
import TeamIntroduction from './pages/TeamIntroduction';
import News from './pages/News';
import UserProfile from './pages/services/UserProfile';
import MarketingContent from './pages/services/MarketingContent';
import BrandCommunication from './pages/services/BrandCommunication';

// 滚动到顶部的组件
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/team" element={<TeamIntroduction />} />
            <Route path="/news" element={<News />} />
            <Route path="/services/user-profile" element={<UserProfile />} />
            <Route path="/services/marketing-content" element={<MarketingContent />} />
            <Route path="/services/brand-communication" element={<BrandCommunication />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;