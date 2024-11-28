import React from 'react';
import PostListPage from '../../_components/PostListPage';
import { ListPageProps } from '@/types/TypePage';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Blog({ params, searchParams }: ListPageProps) {
  return <PostListPage params={params} searchParams={searchParams} />;
}
