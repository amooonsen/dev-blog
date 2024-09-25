'use client';

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

// components
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function PostFooter() {
  const pathname = usePathname();

  const segments = pathname.split('/');
  const parentPath = segments.slice(0, -1).join('/') || '/';

  return (
    <Section id="postFooter">
      <Button asChild>
        <Link href={parentPath}>목록</Link>
      </Button>
      {/* 이전글 다음글 */}
    </Section>
  );
}
