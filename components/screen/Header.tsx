import React from 'react';
import Link from 'next/link';

// components
import Logo from '../ui/Logo';
import HeaderNavigation from '../ui/HeaderNavigation';
import ThemeToogle from '@/components/screen/ThemeToogle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-background backdrop-blur-md border-b">
      <div className="flex justify-between items-center max-w-full lg:max-w-5xl h-full mx-auto px-6 lg:px-12">
        <ul className="skipnav">
          <li>
            <a href="#content">컨텐츠 바로가기</a>
          </li>
        </ul>
        <Logo />
        <div className="flex gap-6 items-center">
          <HeaderNavigation />
          <ThemeToogle />
        </div>
      </div>
    </header>
  );
}
