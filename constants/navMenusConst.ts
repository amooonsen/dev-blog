export type navMenusType = {
  page: string;
  href: string;
  target?: string;
  rel?: string;
};

export const navMenus: navMenusType[] = [
  {
    page: 'Blog',
    href: '/blog',
  },
  {
    page: 'NewsLetter',
    href: '/newsletter',
  },
  {
    page: 'Portfolio',
    href: '#',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    page: 'Contact',
    href: '/contact',
  },
];
