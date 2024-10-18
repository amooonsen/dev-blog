import React from 'react';

import PostListPage from '../../_components/PostListPage';

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

export async function generateStaticParams() {
  const postRepository = new PostRepository();
  const postPaths: string[] = postRepository.getPostFilePaths();

  const categoryList = await Promise.all(
    postPaths.map((postPath) => {
      const { oneDepth, category } = extractCategoryAndSlug(postPath, postRepository.POSTS_PATH);

      return {
        oneDepth,
        category,
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
