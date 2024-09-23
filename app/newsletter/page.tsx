import React from 'react';

import PostListPage from '../blog/(main)/_components/PostListPage';

type CategoryListPageProps = {
  params: { category: string };
};

// 카테고리 랜더링 페이지임용 ㅋ
export default async function NewsLetterPage({ params }: CategoryListPageProps) {
  return <PostListPage category={params.category} />;
}
