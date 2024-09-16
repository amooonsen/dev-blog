import React from 'react';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './_components/PostThumbnailList';
import FilterCategory from './_components/FilterCategory';

export default function blogMain() {
  return (
    <main className="mt-14 mb-8">
      <h1 className="border-t border-b border-slate-400 text-[256px] font-bold text-center">
        DEV LOG
      </h1>
      <Section className="mt-10">
        <FilterCategory />
      </Section>
      <Section className="mt-10 space-y-8">
        <h2 className="text-2xl font-bold">All blog posts</h2>
        <PostThumbnailList />
      </Section>
    </main>
  );
}
