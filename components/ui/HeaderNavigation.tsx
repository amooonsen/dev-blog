import React from 'react';
import Link from 'next/link';
import { navMenus, navMenusType } from '@/constants/navMenusConst';

export default function HeaderNavigation() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-4 text-base">
        {navMenus.map((item: navMenusType, index: number) => (
          <li key={`nav-menus-${index}`}>
            <Link className="block p-4" href={item.href} target={item.target} rel={item.rel}>
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
