import React from 'react';
import { PostDetailRepository } from '@/service/PostDetailRepository';
import { PostRepository } from '@/service/PostRepository';
import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';
import PostFooter from './_components/PostFooter';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PostDetailProps {
  params: {
    onedepth: string;
    category: string;
    slug: string;
  };
}

export default async function PostDetail({ params }: PostDetailProps) {
  const { onedepth, category, slug } = params;
  const decodedCategory = decodeURIComponent(category);

  const postRepository = new PostRepository(onedepth);
  const postDetailRepository = new PostDetailRepository(onedepth);

  const [postDetail, postList] = await Promise.all([
    postDetailRepository.fetchPostDetail(decodedCategory, slug),
    postRepository.fetchPostList(),
  ]);

  return (
    <main className="mx-auto mt-20">
      <PostHead post={postDetail} />
      <PostBody post={postDetail} />
      <PostFooter postList={postList} />
    </main>
  );
}
// 모바일에서는 코드 영역이 완전히 보이지 않을 수 있어요.
// 스낵바로 띄우기
