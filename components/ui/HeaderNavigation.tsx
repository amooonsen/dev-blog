'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DestoryText from '@/components/motion/DestoryText';

import { navMenus, navMenusType } from '@/constants/navMenusConst';

export default function HeaderNavigation() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-4 text-base">
        {navMenus.map((item: navMenusType, index: number) => (
          <li key={`nav-menus-${index}`}>
            <DestoryText>
              <Link className="block p-4" href={item.href} target={item.target} rel={item.rel}>
                {item.page}
              </Link>
            </DestoryText>
          </li>
        ))}
      </ul>
    </nav>
  );
}
