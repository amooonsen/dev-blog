import React, { Suspense } from 'react';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './PostThumbnailList';
import FilterCategory from './FilterCategory';
import SearchPost from '@/components/screen/SearchPost';
import { SortCategoryPopover } from './SortCategoryPopover';
import PostListSkeleton from '@/components/loading/PostListSkeleton';

// repo
import { PostRepository } from '@/service/PostRepository';

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
        <div className="flex justify-between">
          <FilterCategory allPostCount={allPostCount} categoryList={categoryList} />
          <ul className="flex gap-4">
            <li>
              {/* 태그별로 소팅해주는 팝오버 삽입 예정 */}
              <SortCategoryPopover type="tag" postList={postList} />
            </li>
            <li>
              {/* 오름차순, 내림차순, 최신순, 오래된순 팝오버 예정 */}
              <SortCategoryPopover type="sort" postList={postList} />
            </li>
          </ul>
        </div>
      </Section>
      <Section className="mt-14 space-y-8">
        <Suspense fallback={<PostListSkeleton />}>
          <PostThumbnailList postList={postList} category={category} />
        </Suspense>
      </Section>
    </main>
  );
}
