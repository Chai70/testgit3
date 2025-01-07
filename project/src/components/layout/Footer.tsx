import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants/company';
import Container from '../ui/Container';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // 处理首页链接
    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo({ top: 0 });
      }
      return;
    }
    
    // 处理锚点链接
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // 处理普通页面导航
    navigate(href);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400">{COMPANY_INFO.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">服务项目</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/services/user-profile" 
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, '/services/user-profile')}
                >
                  数字化用户画像
                </a>
              </li>
              <li>
                <a 
                  href="/services/marketing-content" 
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, '/services/marketing-content')}
                >
                  数字化内容营销
                </a>
              </li>
              <li>
                <a 
                  href="/services/brand-communication" 
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, '/services/brand-communication')}
                >
                  数字化品牌传播
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/company-profile" 
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, '/company-profile')}
                >
                  公司简介
                </a>
              </li>
              <li>
                <a 
                  href="/team" 
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, '/team')}
                >
                  团队介绍
                </a>
              </li>
              <li>
                <a 
                  href="/news" 
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, '/news')}
                >
                  新闻动态
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>电话：{COMPANY_INFO.contact.phone}</li>
              <li>邮箱：{COMPANY_INFO.contact.email}</li>
              <li>地址：{COMPANY_INFO.contact.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 {COMPANY_INFO.name} 版权所有</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;