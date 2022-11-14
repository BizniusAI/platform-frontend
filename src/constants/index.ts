export const languages: TLanguages = {
  default: 'EN',
  en: 'EN',
  'zh-hant': '繁體中文',
}

export const litepaperLink = 'https://sefo.gitbook.io/sefo-finance/'
export const twitterLink = 'https://twitter.com/SeFo_Fi'

export const menuLinks: TMenu[] = [
  {
    name: 'service',
    url: '/services',
    submenu: [
      { name: 'stableVault', url: '/services/stable-vault' },
      { name: 'advancedVault', url: '/services/advanced-vault' },
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
