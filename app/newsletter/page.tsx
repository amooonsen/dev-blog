import React from 'react';

import PostListPage from '../blog/(main)/_components/PostListPage';

// types
import { ListPageProps } from '@/types/Page';

export default async function NewsLetterPage({ params, searchParams }: ListPageProps) {
  return <PostListPage params={params} searchParams={searchParams} />;
}
