import React from 'react';

import PostListPage from '../(main)/_components/PostListPage';

// meta
import { Metadata } from 'next';

// constants
import { baseDomain, blogName } from '@/constants/metaInfoConst';

import { PostParser } from '@/service/PostParser';

// types
import { ListPageProps } from '@/types/Page';

export async function generateMetadata({ params: { category } }: ListPageProps): Promise<Metadata> {
  const postRepository = new PostParser();
  const categoryPublicName = postRepository.formatCategoryName(category);
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
