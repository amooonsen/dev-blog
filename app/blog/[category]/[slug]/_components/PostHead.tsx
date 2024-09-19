import React from 'react';

import { Post } from '@/types/Post';

interface PostHeadProps {
  post: Post;
}

export default function PostHead({ post }: PostHeadProps) {
  return (
    <div>
      <h1>{post?.title}</h1>
      {/* <img src={post?.thumbnail} alt="삽입 예정" /> */}
    </div>
  );
}
