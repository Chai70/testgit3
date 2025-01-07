export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  {
    label: '服务项目',
    href: '#services',
    children: [
      { label: '数字化用户画像', href: '/services/user-profile' },
      { label: '数字化营销内容', href: '/services/marketing-content' },
      { label: '数字化品牌传播', href: '/services/brand-communication' }
    ]
  },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' }
];