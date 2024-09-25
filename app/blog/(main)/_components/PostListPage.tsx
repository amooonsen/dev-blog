import React, { Suspense } from 'react';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './PostThumbnailList';
import FilterCategory from './FilterCategory';
import SearchPost from '@/components/screen/SearchPost';
import { SortCategoryPopover } from './SortCategoryPopover';
import PostListSkeleton from '@/components/loading/PostListSkeleton';
import PostListNoData from './PostListNoData';

// repo
import { PostRepository } from '@/service/PostRepository';

// types
import { ListPageProps } from '@/types/Page';

export default async function PostListPage({ params: { category }, searchParams }: ListPageProps) {
  const postRepository = new PostRepository();
  const [allPostCount, categoryList, allTags] = await Promise.all([
    postRepository.fetchAllPostCount(),
    postRepository.fetchCategoryList(),
    postRepository.fetchAllTags(),
  ]);

  const tagsParams = searchParams?.tags;
  const sortParam = searchParams?.sort;
  const selectedTags = Array.isArray(tagsParams)
    ? tagsParams // 배열이면 그대로 사용
    : tagsParams
    ? tagsParams.split(',') // 문자열이면 split 사용
    : [];
  const sortOption = Array.isArray(sortParam) ? sortParam[0] : sortParam || '';

  const postList = await postRepository.fetchFilteredAndSortedPostList(
    category,
    selectedTags,
    sortOption
  );

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
              <SortCategoryPopover type="tag" postList={postList} allTags={allTags} />
            </li>
            <li>
              <SortCategoryPopover type="sort" postList={postList} />
            </li>
          </ul>
        </div>
      </Section>
      <Section className="mt-14 space-y-8">
        <Suspense fallback={<PostListSkeleton />}>
          {postList.length > 0 ? (
            <PostThumbnailList postList={postList} category={category} />
          ) : (
            <PostListNoData />
          )}
        </Suspense>
      </Section>
    </main>
  );
}
