export type navMenusType = {
  page: string;
  href: string;
  target?: string;
  rel?: string;
};

export const navMenus: navMenusType[] = [
  {
    page: 'Tech',
    href: '/post/tech',
  },
  {
    page: 'NewsLetter',
    href: '/post/newsletter',
  },
  {
    page: 'Life',
    href: '/post/life',
  },
  {
    page: 'Portfolio',
    href: 'https://github.com/amooonsen/dev-blog',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
