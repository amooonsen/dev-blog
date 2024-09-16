import dayjs from 'dayjs';
import React from 'react';

export default function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer>
      <div className="">
        <address>newabekar@naver.com</address>
        <small>© {currentYear} Cho Kyung Moon. All Rights Reserved.</small>
      </div>
      <ul>
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
    </footer>
  );
}
