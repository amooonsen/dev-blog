import React from 'react';
import PostListPage from '../../_components/PostListPage';
import { ListPageProps } from '@/types/TypePage';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return [{ onedepth: 'tech' }, { onedepth: 'newsletter' }, { onedepth: 'life' }];
}

export default async function Blog({ params, searchParams }: ListPageProps) {
  console.log('Rendering Blog with params:', params);
  return <PostListPage params={params} searchParams={searchParams} />;
}
