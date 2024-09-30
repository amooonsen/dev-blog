import React, { Suspense } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// components
import { Section } from '@/components/ui/section';
import PostThumbnailList from './PostThumbnailList';
import FilterCategory from './FilterCategory';
import SortCategoryContainer from './SortCategoryContainer';
import SearchPost from '@/components/screen/SearchPost';
import PostListSkeleton from '@/components/loading/PostListSkeleton';
import PostListNoData from './PostListNoData';

// repo
import { PostRepository } from '@/service/PostRepository';

// types
import { ListPageProps } from '@/types/TypePage';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'posts', filename), 'utf-8');

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}

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

  // console.log(selectedTags);
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
          <SortCategoryContainer allTags={allTags} />
        </div>
      </Section>
      <Section className="mt-14 space-y-8">
        <Suspense fallback={<PostListSkeleton />}>
          {postList.length > 0 ? (
            <PostThumbnailList
              postList={postList}
              category={category}
              selectedTags={selectedTags}
            />
          ) : (
            <PostListNoData />
          )}
        </Suspense>
      </Section>
    </main>
  );
}
