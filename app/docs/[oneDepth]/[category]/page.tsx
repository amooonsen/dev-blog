import React from 'react';

import PostListPage from '../../../_components/PostListPage';

// meta
import { Metadata } from 'next';

// constants
import { baseDomain, blogName } from '@/constants/metaInfoConst';

// repo
import { PostRepository } from '@/service/PostRepository';

// utils
import { formatCategoryName, extractCategoryAndSlug } from '@/lib/path';

// types
import { ListPageProps } from '@/types/TypePage';

// export const revalidate = 60; // 매 60초마다 ISR로 페이지 재생성

export async function generateStaticParams() {
  const postRepository = new PostRepository();
  const postPaths: string[] = postRepository.getPostFilePaths(); // 비동기 처리가 필요하다면 await 추가

  const categoryList = await Promise.all(
    postPaths.map(async (postPath) => {
      const { oneDepth, category } = extractCategoryAndSlug(postPath, postRepository.POSTS_PATH);
      console.log(`oneDepth ${oneDepth}`);
      console.log(`category ${category}`);
      return {
        oneDepth: oneDepth,
        category: category,
      };
    })
  );
  return categoryList;
}

export async function generateMetadata({ params: { category } }: ListPageProps): Promise<Metadata> {
  const categoryPublicName = formatCategoryName(category);
  const title = `${categoryPublicName} | ${blogName}`;
  const url = `${baseDomain}/${category}`;

  return {
    title,
    openGraph: {
      title,
      url,
      // images: [blogThumbnailURL],
    },
    twitter: {
      title,
      // images: [blogThumbnailURL],
    },
  };
}

export default async function CategoryListPage({ params, searchParams }: ListPageProps) {
  return <PostListPage params={params} searchParams={searchParams} />;
}
