import React from 'react';
import PostListPage from '../../_components/PostListPage';
import { ListPageProps } from '@/types/TypePage';

export function generateStaticParams() {
  return ['tech', 'newsletter', 'life'].map((onedepth) => ({ onedepth }));
}

export default async function Blog({ params, searchParams }: ListPageProps) {
  return <PostListPage params={params} searchParams={searchParams} />;
}
