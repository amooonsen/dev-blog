import {
  IconBrandGithub,
  IconBrandInstagram,
  IconExchange,
  IconBriefcase2,
} from '@tabler/icons-react';

const myLinks = [
  {
    title: 'GitHub',
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://github.com/amooonsen',
  },
  {
    title: 'Profile',
    icon: <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://www.rallit.com/hub/resumes/290067',
  },
  {
    title: 'Changelog',
    icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://github.com/amooonsen/dev-blog/pulls',
  },
  {
    title: 'Instagram',
    icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://www.instagram.com/_mo___on/',
  },
];

export default myLinks;
