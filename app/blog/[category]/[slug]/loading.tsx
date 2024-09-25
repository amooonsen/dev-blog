import React from 'react';

import PostHeadSkeleton from '@/components/loading/PostHeadSkeleton';
import PostBodySkeleton from '@/components/loading/PostBodySkeleton';

export default function loading() {
  return (
    <main className="mx-auto mt-20">
      <PostHeadSkeleton />
      <PostBodySkeleton />
    </main>
  );
}
