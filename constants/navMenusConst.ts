export type navMenusType = {
  page: string;
  href: string;
  target?: string;
  rel?: string;
};

export const navMenus: navMenusType[] = [
  {
    page: 'Tech',
    href: '/tech',
  },
  {
    page: 'NewsLetter',
    href: '/newsletter',
  },
  {
    page: 'Life',
    href: '/life',
  },
  // {
  //   page: 'Portfolio',
  //   href: '#',
  //   target: '_blank',
  //   rel: 'noopener noreferrer',
  // },
  {
    page: 'Contact',
    href: '/contact',
  },
];
