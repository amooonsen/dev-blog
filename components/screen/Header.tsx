import React, { Suspense } from 'react';
import Link from 'next/link';

// components
import HeaderNavigation from '../ui/HeaderNavigation';
import ThemeToogle from '@/components/screen/ThemeToogle';

// icons
import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-background backdrop-blur-md border-b">
      <div className="flex justify-between items-center max-w-full lg:max-w-5xl h-full mx-auto px-6 lg:px-12">
        <ul className="skipnav">
          <li>
            <a href="#content">컨텐츠 바로가기</a>
          </li>
        </ul>
        <div id="logo" className="lg:min-w-[300px] h-[36px]">
          <Link href="/home" className={`text-2xl font-semibold`} style={{ display: 'block' }}>
            MoonLogg
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <HeaderNavigation />
          <Suspense fallback={<Sun width={24} height={24} />}>
            <ThemeToogle />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
