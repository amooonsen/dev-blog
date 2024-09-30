import React from 'react';
import FilterCategorySkeleton from '@/components/loading/FilterCategorySkeleton';
import PostListSkeleton from '@/components/loading/PostListSkeleton';

export default function loading() {
  return (
    <main className="mt-20 mb-32">
      <FilterCategorySkeleton />
      <PostListSkeleton />
    </main>
  );
}
