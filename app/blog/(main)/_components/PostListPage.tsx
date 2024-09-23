import React, { Suspense } from 'react';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './PostThumbnailList';
import FilterCategory from './FilterCategory';
import SearchPost from '@/components/screen/SearchPost';
import PostListSkeleton from '@/components/loading/PostListSkeleton';

// lib
import { PostRepository } from '@/lib/parse';

// types
import { CategoryDetail } from '@/types/Post';

interface PostListPageProps {
  category?: string;
}

export default async function PostListPage({ category }: PostListPageProps) {
  const postRepository = new PostRepository();
  const allPostCount: number = await postRepository.fetchAllPostCount();
  const categoryList: CategoryDetail[] = await postRepository.fetchCategoryList();
  const postList = await postRepository.fetchSortedPostList(category);

  return (
    <main className="mt-20 mb-32">
      <Section className="mt-10">
        <SearchPost />
      </Section>
      <Section className="mt-14">
        <FilterCategory allPostCount={allPostCount} categoryList={categoryList} />
      </Section>
      <Section className="mt-10 space-y-8">
        <h2 className="text-3xl font-bold">All blog posts</h2>
        <Suspense fallback={<PostListSkeleton />}>
          <PostThumbnailList postList={postList} />
        </Suspense>
      </Section>
    </main>
  );
}
