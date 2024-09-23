import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PostHead from './_components/PostHead';
// import PostBody from './_components/PostBody';

const PostBody = dynamic(() => import('./_components/PostBody'), { ssr: false });

import { PostRepository } from '@/lib/parse';

interface PostDetailProps {
  params: {
    category: string;
    slug: string;
  };
}

export default async function PostDetail({ params: { category, slug } }: PostDetailProps) {
  const postRepository = new PostRepository();
  const postDetail = await postRepository.fetchPostDetail(category, slug);

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
