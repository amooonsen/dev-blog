import dayjs from 'dayjs';

import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import myLinks from '@/constants/myLinkConst';

export default function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer className="border-t">
      <div className="flex justify-between items-center lg:max-w-6xl h-32 mx-auto px-6 lg:px-0">
        <div className="flex flex-col gap-2">
          <address className="not-italic">newabekar@naver.com</address>
          <small>© {currentYear} Cho Kyung Moon. All Rights Reserved.</small>
        </div>
        <div className="flex items-center justify-end w-full h-auto">
          <FloatingDock mobileClassName="translate-y-20" items={myLinks} />
        </div>
      </div>
    </footer>
  );
}
