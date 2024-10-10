import dayjs from 'dayjs';

import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import myLinks from '@/constants/myLinkConst';

export default function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer className="border-t bg-background">
      <div className="flex justify-between items-center lg:max-w-5xl h-32 mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-2">
          <small>© {currentYear} Cho Kyung Moon. All Rights Reserved.</small>
        </div>
        <div className="flex items-center justify-end w-fit h-auto">
          <FloatingDock items={myLinks} />
        </div>
      </div>
    </footer>
  );
}
