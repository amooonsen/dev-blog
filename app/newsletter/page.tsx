import React from 'react';

import PostListPage from '../blog/_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export default async function NewsLetterPage({ params, searchParams }: ListPageProps) {
  return <PostListPage params={params} searchParams={searchParams} />;
}
