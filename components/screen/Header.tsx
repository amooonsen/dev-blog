import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-18">
      <div className="flex justify-between items-center max-w-6xl	mx-auto">
        <div id="logo">
          <Link className="text-4xl font-semibold" href="/">
            Moon.log{' '}
          </Link>
        </div>
        <div className="flex">
          <nav>
            <ul className="flex gap-4 text-2xl">
              <li>
                <Link className="block p-4" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="block p-4" href="/project">
                  Project
                </Link>
              </li>
              <li>
                <Link className="block p-4" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="block p-4" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* ModeDark */}
        </div>
      </div>
    </header>
  );
}
