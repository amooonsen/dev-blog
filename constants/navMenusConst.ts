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
    page: 'Portfolio',
    href: '#',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    page: 'About',
    href: '/about',
  },
  {
    page: 'Contact',
    href: '/contact',
  },
];
