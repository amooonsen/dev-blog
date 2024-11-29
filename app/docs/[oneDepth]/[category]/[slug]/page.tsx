import React from 'react';

import { getPostDetail, getPostPaths, parsePostAbstract } from '@/lib/post';

import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';
import PostFooter from './_components/PostFooter';

interface PostDetailProps {
  params: {
    onedepth: string;
    category: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({
      onedepth: item.onedepth,
      category: item.category,
      slug: item.slug,
    }));
  return paramList;
}

export default async function PostDetail({ params }: PostDetailProps) {
  const { onedepth, category, slug } = params;
  const postDetail = await getPostDetail(onedepth, category, slug);

  return (
    <main className="mx-auto mt-20">
      <PostHead post={postDetail} />
      <PostBody post={postDetail} />
      {/* <PostFooter postList={postList} /> */}
    </main>
  );
}
// 모바일에서는 코드 영역이 완전히 보이지 않을 수 있어요.
// 스낵바로 띄우기
