import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, AlertCircle, CheckCircle2, LucideIcon } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { gradients } from '../../styles/gradients';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  href?: string;
  formatContent?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  // 格式化电话号码显示
  const formatPhoneNumber = (phone: string): string => {
    // 移除所有非数字字符
    const cleaned = phone.replace(/\D/g, '');
    // 根据长度格式化
    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
    }
    return phone;
  };

  // 自动清除状态消息
  useEffect(() => {
    if (status.type) {
      const timer = setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 当用户开始输入时清除错误消息
    if (status.type === 'error') {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 表单验证
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: '请填写所有必填字段'
      });
      return;
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: '请输入有效的邮箱地址'
      });
      return;
    }

    // 构建邮件内容
    const subject = `来自${formData.name}的留言`;
    const body = `
姓名：${formData.name}
邮箱：${formData.email}

留言内容：
${formData.message}
    `;

    try {
      // 使用mailto协议打开默认邮件客户端
      window.location.href = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // 设置成功状态
      setStatus({
        type: 'success',
        message: '邮件客户端已打开，请在邮件客户端中发送您的留言'
      });
      
      // 清空表单
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error: unknown) {
      setStatus({
        type: 'error',
        message: '打开邮件客户端失败，请检查您的系统设置'
      });
    }
  };

  const handleCardClick = (href: string | undefined) => {
    if (!href) return;
    
    try {
      window.open(href, '_blank');
    } catch (error: unknown) {
      setStatus({
        type: 'error',
        message: '打开链接失败，请稍后重试'
      });
    }
  };

  const contactInfo: ContactInfo[] = [
    { 
      icon: MapPin, 
      title: '公司地址', 
      content: COMPANY_INFO.contact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.contact.address)}`
    },
    { 
      icon: Phone, 
      title: '联系电话', 
      content: formatPhoneNumber(COMPANY_INFO.contact.phone),
      formatContent: COMPANY_INFO.contact.phone,
      href: `tel:${COMPANY_INFO.contact.phone.replace(/\D/g, '')}`
    },
    { 
      icon: Mail, 
      title: '电子邮箱', 
      content: COMPANY_INFO.contact.email,
      href: `mailto:${COMPANY_INFO.contact.email}`
    }
  ];

  return (
    <section id="contact" className={`py-20 ${gradients.subtle}`}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`text-transparent bg-clip-text ${gradients.primary}`}>
              联系我们
            </span>
          </h2>
          <p className="text-gray-600">期待与您的合作，共创未来的数字化品牌营销</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className={`text-center backdrop-blur-sm bg-white/80 hover:scale-105 transition-transform duration-300 ${
                item.href ? 'cursor-pointer hover:bg-gray-50' : ''
              }`}
              onClick={() => handleCardClick(item.href)}
            >
              <div className={`inline-flex p-3 rounded-lg ${gradients.primary} mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
              {item.href && (
                <p className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                  点击{item.title === '公司地址' ? '查看地图' : '直接联系'}
                </p>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-16 backdrop-blur-sm bg-white/90">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {status.type && (
              <div 
                className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
                role="alert"
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-medium">
                    {status.type === 'success' ? '提交成功' : '提交失败'}
                  </p>
                  <p className="text-sm mt-1 text-gray-600">
                    {status.message}
                  </p>
                </div>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="您的姓名"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors duration-200 bg-white/50
                      ${status.type === 'error' && !formData.name.trim() 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'}`}
                    required
                    aria-label="姓名"
                  />
                  {status.type === 'error' && !formData.name.trim() && (
                    <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      请输入姓名
                    </div>
                  )}
                </div>
                <p className={`mt-3 text-sm ${status.type === 'error' && !formData.name.trim() ? 'text-red-500' : 'text-gray-500'}`}>
                  请输入您的真实姓名
                </p>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="电子邮箱"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors duration-200 bg-white/50
                      ${(status.type === 'error' && (!formData.email.trim() || !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)))
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'}`}
                    required
                    aria-label="电子邮箱"
                  />
                  {status.type === 'error' && (
                    !formData.email.trim() ? (
                      <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        请输入邮箱地址
                      </div>
                    ) : !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
                      <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        邮箱格式不正确
                      </div>
                    )
                  )}
                </div>
                <p className={`mt-3 text-sm ${status.type === 'error' && (!formData.email.trim() || !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) ? 'text-red-500' : 'text-gray-500'}`}>
                  我们会通过此邮箱与您联系
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="请输入您的留言"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors duration-200 bg-white/50
                    ${status.type === 'error' && !formData.message.trim()
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500'}`}
                  required
                  aria-label="留言内容"
                />
                {status.type === 'error' && !formData.message.trim() && (
                  <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    请输入留言内容
                  </div>
                )}
              </div>
              <p className={`mt-3 text-sm ${status.type === 'error' && !formData.message.trim() ? 'text-red-500' : 'text-gray-500'}`}>
                请详细描述您的需求，我们会尽快回复
              </p>
            </div>
            <Button 
              type="submit" 
              className={`w-full ${gradients.primary} transition-transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              提交留言
            </Button>
          </form>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;