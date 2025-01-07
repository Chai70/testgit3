export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  content: string;
  tags?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: '公司成功完成新一轮融资',
    date: '2024-12-28',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80',
    summary: '我们很高兴地宣布，公司已完成新一轮融资，这将帮助我们进一步扩大业务规模，提升服务质量。',
    content: '在投资者的大力支持下，我们完成了新一轮融资。这笔资金将用于技术研发、人才引进和市场拓展，帮助我们为客户提供更好的服务。',
    tags: ['公司新闻', '融资']
  },
  {
    id: 2,
    title: '发布全新数字营销解决方案',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    summary: '我们推出了全新的数字营销解决方案，整合AI技术与大数据分析，为企业提供更精准的营销服务。',
    content: '新推出的解决方案采用了最新的AI技术和大数据分析工具，可以帮助企业更好地了解用户需求，制定精准的营销策略。',
    tags: ['产品发布', '技术创新']
  },
  {
    id: 3,
    title: '荣获2024年度最佳服务商奖',
    date: '2024-11-30',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80',
    summary: '公司凭借优质的服务和创新的解决方案，荣获2024年度最佳数字营销服务商奖。',
    content: '这个奖项是对我们团队努力的肯定，我们将继续提供高质量的服务，帮助更多企业实现数字化转型。',
    tags: ['公司荣誉', '行业认可']
  },
  {
    id: 4,
    title: '成功举办2024数字营销峰会',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    summary: '公司成功举办了2024数字营销峰会，与行业专家共同探讨数字营销的未来发展趋势。',
    content: '峰会吸引了众多行业专家和企业代表参加，大家就数字营销的未来发展进行了深入探讨，分享了很多有价值的见解。',
    tags: ['行业活动', '数字营销']
  },
  {
    id: 5,
    title: '开设新的研发中心',
    date: '2024-10-28',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    summary: '为了加强技术研发能力，公司在深圳设立了新的研发中心，重点发展AI和大数据技术。',
    content: '新研发中心将专注于AI和大数据技术的研发，这将大大提升我们的技术实力，为客户提供更好的服务。',
    tags: ['公司发展', '技术创新']
  }
];
