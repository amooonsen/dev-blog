import React from "react";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-15">
      <div className="flex justify-between items-center max-w-6xl	mx-auto">
        <div className="logo">
          <Link href="/">ChoKyungMoon</Link>
        </div>
        <div className="flex">
          <nav>
            <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/project">Project</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <button>다크모드</button>
        </div>
      </div>
    </header>
  );
}
