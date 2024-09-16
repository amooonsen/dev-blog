import dayjs from 'dayjs';
import React from 'react';

export default function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer className="border-t pt-8">
      <div className="flex justify-between items-center lg:max-w-6xl mx-auto px-6 lg:px-0">
        <div className="flex flex-col gap-2">
          <address className="not-italic">newabekar@naver.com</address>
          <small>© {currentYear} Cho Kyung Moon. All Rights Reserved.</small>
        </div>
        <ul className="flex gap-3 text-xl font-semibold">
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
