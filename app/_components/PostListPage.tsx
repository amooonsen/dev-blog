import React, { Suspense } from 'react';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './PostThumbnailList';
import SearchPost from '@/components/screen/SearchPost';
import FilterCategory from './FilterCategory';
import SortCategoryContainer from './SortCategoryContainer';
import PostListSkeleton from '@/components/loading/PostListSkeleton';
import PostListNoData from './PostListNoData';

// repo
import { getSortedPostList, getCategoryDetailList, getAllPostCount } from '@/lib/post';

// types
import { ListPageProps } from '@/types/TypePage';

export default async function PostListPage({
  params: { onedepth, category },
  searchParams,
}: ListPageProps) {
  const postList = await getSortedPostList(onedepth, category);
  const categoryList = await getCategoryDetailList();
  const allPostCount = await getAllPostCount();

  return (
    <main className="mt-20 mb-32">
      <Section className="mt-10">
        <SearchPost />
      </Section>
      <Section className="mt-14">
        <div className="flex flex-col lg:flex-row justify-between">
          <FilterCategory
            onedepth={onedepth}
            allPostCount={allPostCount}
            categoryList={categoryList}
          />
          {/* <SortCategoryContainer allTags={allTags} /> */}
        </div>
      </Section>
      <Section className="mt-14 space-y-8">
        <Suspense fallback={<PostListSkeleton />}>
          {postList.length > 0 ? (
            <PostThumbnailList postList={postList} category={category} selectedTags={['TEST']} />
          ) : (
            <PostListNoData />
          )}
          <div></div>
        </Suspense>
      </Section>
    </main>
  );
}
