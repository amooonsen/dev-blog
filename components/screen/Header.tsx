import React from 'react';

import Link from 'next/link';

// components
import Logo from '../ui/Logo';

// constants
import { navMenus, navMenusType } from '@/constants/navMenusConst';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full h-16 backdrop-blur-md border-b">
      <div className="flex justify-between items-center max-w-full lg:max-w-5xl h-full mx-auto px-6 lg:px-12">
        <ul className="skipnav">
          <li>
            <a href="#content">컨텐츠 바로가기</a>
          </li>
        </ul>
        <Logo />
        {/* 모바일 UI 제작 필요 */}
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
        {/* ModeDark */}
      </div>
    </header>
  );
}
