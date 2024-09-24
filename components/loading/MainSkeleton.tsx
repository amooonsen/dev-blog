import React from 'react';
import FilterCategorySkeleton from './FilterCategorySkeleton';
import PostListSkeleton from './PostListSkeleton';
import { Section } from '../ui/section';
import { Skeleton } from '../ui/skeleton';

export default function MainSkeleton() {
  return (
    <main className="mt-20 mb-32">
      <Section className="flex flex-col space-y-4 justify-center items-center mt-10">
        <Skeleton className="w-1/3 h-16" />
        <Skeleton className="w-1/2 h-16" />
      </Section>
      <Section className="mt-14">
        <FilterCategorySkeleton />
      </Section>
      <Section className="mt-14 space-y-8">
        <PostListSkeleton />
      </Section>
    </main>
  );
}
