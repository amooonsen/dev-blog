'use client';

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

// components
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

// hooks
import useViewSameTagPost from '@/hooks/useViewSameTagPost';

// types
import { Post } from '@/types/TypePost';

interface PostFooterProps {
  postList: Post[];
}

export default function PostFooter({ postList }: PostFooterProps) {
  const pathname = usePathname();

  const segments = pathname.split('/');
  const parentPath = segments.slice(0, -1).join('/') || '/';

  useViewSameTagPost();

  return (
    <Section id="postFooter">
      <Button asChild>
        <Link href={parentPath}>목록</Link>
      </Button>
      <h4>같은 태그의 글 이에요.</h4>
      {/* POSTLIST TAGS */}
    </Section>
  );
}
