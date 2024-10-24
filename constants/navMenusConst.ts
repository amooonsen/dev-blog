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
    page: 'Portfolio',
    href: '#',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
