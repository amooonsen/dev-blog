import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';

// repo
import { PostDetailRepository } from '@/service/PostDetailRepository';
import { PostParser } from '@/service/PostParser';

interface PostDetailProps {
  params: {
    category: string;
    slug: string;
  };
}

export const dynamicParams = false;

export const generateStaticParams = () => {
  const postDetailRepository = new PostDetailRepository();
  const postPaths: string[] = postDetailRepository.getPostFilePaths();

  // 경로에서 category와 slug를 추출하여 params 객체 생성
  return postPaths.map((filePath) => {
    const pathSegments = filePath.replace('/posts', '').split('/');
    const category = pathSegments[0];
    const slug = pathSegments[1];
    return {
      params: {
        category,
        slug,
      },
    };
  });
};

export default async function PostDetail({ params: { category, slug } }: PostDetailProps) {
  const postDetailRepository = new PostDetailRepository();
  const postDetail = await postDetailRepository.fetchPostDetail(category, slug);

  return (
    <main className="mx-auto mt-20">
      <Suspense fallback="헤더 로딩중">
        <PostHead post={postDetail} />
      </Suspense>
      <Suspense fallback="바디 로딩중">
        <PostBody post={postDetail} />
      </Suspense>
    </main>
  );
}
