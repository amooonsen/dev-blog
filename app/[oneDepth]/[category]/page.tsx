import React from 'react';

import PostListPage from '../../_components/PostListPage';

// meta
import { Metadata } from 'next';

// constants
import { baseDomain, blogName } from '@/constants/metaInfoConst';

// utils
import { formatCategoryName } from '@/lib/path';

// types
import { ListPageProps } from '@/types/TypePage';

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
