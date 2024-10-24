export type navMenusType = {
  page: string;
  href: string;
  target?: string;
  rel?: string;
};

export const navMenus: navMenusType[] = [
  {
    page: 'Tech',
    href: '/docs/tech',
  },
  {
    page: 'NewsLetter',
    href: '/docs/newsletter',
  },
  {
    page: 'Life',
    href: '/docs/life',
  },
  {
    page: 'Portfolio',
    href: 'https://github.com/amooonsen/dev-blog',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
