export const languages: TLanguages = {
  en: 'EN',
  'zh-hant': '繁體中文',
}

export const menuLinks: TMenu[] = [
  {
    name: 'service',
    url: '/services',
    submenu: [
      { name: 'lowRisk', url: '/services/low-risk' },
      { name: 'highRisk', url: '/services/low-risk' },
    ],
  },
  {
    name: 'about',
    url: '/about',
  },
  {
    name: 'news',
    url: '/news',
  },
]

export const defaultLocales = ['menu', 'common', 'services']
