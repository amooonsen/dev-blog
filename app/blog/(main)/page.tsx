import React from 'react';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './_components/PostThumbnailList';
import FilterCategory from './_components/FilterCategory';

// lib
import { PostRepository } from '@/lib/parse';

// types
import { CategoryDetail } from '@/types/Post';

interface BlogMainProps {
  category?: string;
}

export default async function BlogMain({ category }: BlogMainProps) {
  const postRepository = new PostRepository();
  const allPostCount: number = await postRepository.fetchAllPostCount();
  const categoryList: CategoryDetail[] = await postRepository.fetchCategoryList();
  const postList = await postRepository.fetchSortedPostList(category);

  return (
    <main className="mt-14 mb-32">
      <h1 className="border-t border-b border-slate-400 text-[192px] font-bold text-center">
        DEV LOG
      </h1>
      <Section className="mt-10">
        <FilterCategory allPostCount={allPostCount} categoryList={categoryList} />
      </Section>
      <Section className="mt-10 space-y-8">
        <h2 className="text-3xl font-bold">All blog posts</h2>
        <PostThumbnailList postList={postList} />
      </Section>
    </main>
  );
}
