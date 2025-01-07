import React, { memo } from 'react';
import { SERVICES } from '../../constants/services';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { gradients } from '../../styles/gradients';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

// 提取ServiceCard子组件并使用memo优化性能
const ServiceCard = memo(({ icon: Icon, title, description, index }: ServiceCardProps) => (
  <Card 
    id={`service${index + 1}`}
    className="backdrop-blur-sm bg-white/80 hover:scale-105 transition-transform duration-300"
  >
    <div className={`inline-flex p-3 rounded-lg ${gradients.primary} mb-6`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
));

// 为了开发环境下的调试方便
ServiceCard.displayName = 'ServiceCard';

// 提取标题部分为单独的组件
const SectionTitle = memo(() => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className={`text-transparent bg-clip-text ${gradients.primary}`}>
        数字化营销服务
      </span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      提供专业的数字化营销服务，助力品牌打造独特的市场竞争力
    </p>
  </div>
));

SectionTitle.displayName = 'SectionTitle';

const Services = () => {
  return (
    <section id="services" className={`py-20 ${gradients.subtle} bg-tech-pattern`}>
      <Container>
        <SectionTitle />
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default memo(Services);