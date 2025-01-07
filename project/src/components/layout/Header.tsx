import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation';
import { COMPANY_INFO } from '../../constants/company';
import { gradients } from '../../styles/gradients';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // 处理首页链接
    if (href === '/') {
      // 如果当前在首页，滚动到顶部
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // 如果不在首页，使用React Router导航到首页
        navigate('/');
      }
      // 关闭移动端菜单（如果打开的话）
      setIsOpen(false);
      return;
    }
    
    // 如果是锚点链接（关于我们和联系我们）
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      // 如果在首页，滚动到对应区域
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // 如果不在首页，滚动到页面底部
        scrollToBottom();
      }
      
      // 关闭移动端菜单（如果打开的话）
      setIsOpen(false);
      return;
    }

    // 处理服务页面的导航
    if (href.startsWith('/services/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 导航到新页面时滚动到顶部
      setIsOpen(false);
      return;
    }
  };

  const handleLogoClick = () => {
    // 如果当前在首页，滚动到顶部
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 如果不在首页，导航到首页
      navigate('/');
    }
  };

  const renderNavItem = (item: typeof NAV_ITEMS[0]) => {
    if (item.children) {
      return (
        <div className="relative group">
          <button className={`flex items-center space-x-1 ${
            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
          }`}>
            <span>{item.label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
            {item.children.map((child, index) => (
              <a
                key={index}
                href={child.href}
                onClick={(e) => handleNavClick(e, child.href)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/90"
              >
                {child.label}
              </a>
            ))}
          </div>
        </div>
      );
    }

    return (
      <a
        href={item.href}
        onClick={(e) => handleNavClick(e, item.href)}
        className={`${
          isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
        }`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src={isScrolled ? '/images/logo-en-dark.png' : '/images/logo-en.png'} 
              alt={COMPANY_INFO.name} 
              className="h-8 mr-2"
            />
            <span className={`text-2xl font-bold ${
              isScrolled 
                ? `text-transparent bg-clip-text ${gradients.primary}` 
                : 'text-white'
            }`}>
              {COMPANY_INFO.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <div key={index}>
                {renderNavItem(item)}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className="py-2">
                  {item.children ? (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-gray-700">
                        {item.label}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child.href)}
                            className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;