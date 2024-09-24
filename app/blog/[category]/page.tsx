import React from 'react';

import PostListPage from '../(main)/_components/PostListPage';

// meta
import { Metadata } from 'next';
import { baseDomain, blogName } from '@/constants/metaInfoConst';

import { PostParser } from '@/service/PostParser';

type CategoryListPageProps = {
  params: { category: string };
};

export async function generateMetadata({ params: { category } }: CategoryListPageProps) {
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

export default async function CategoryListPage({ params }: CategoryListPageProps) {
  return <PostListPage category={params.category} />;
}
