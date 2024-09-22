import { IconBrandGithub, IconBrandX, IconExchange, IconNewSection } from '@tabler/icons-react';

const myLinks = [
  {
    title: 'Components',
    icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'Changelog',
    icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'Twitter',
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'GitHub',
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
];

export default myLinks;
