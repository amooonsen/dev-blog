import React from 'react';
import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';

import { PostRepository } from '@/lib/parse';

interface PostDetailProps {
  params: {
    category: string;
    slug: string;
  };
}

export default async function PostDetail({ params: { category, slug } }: PostDetailProps) {
  const postRepository = new PostRepository();
  const postDetail = postRepository.fetchPostDetail(category, slug);
  console.log(postDetail);

  return (
    <div>
      <PostHead />
      <PostBody />
    </div>
  );
}
