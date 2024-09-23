import React from 'react';

import { getFormattedDate } from '@/lib/date';

import { Post } from '@/types/Post';

interface PostHeadProps {
  post: Post;
}

export default function PostHead({ post }: PostHeadProps) {
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post.preview}</p>
      <img src={post?.thumbnail} alt={post.thumbnailAlt} />
      <div>
        <ul>
          {post.tags.map((item: string, index: number) => (
            <li key={`post-tags-${index}`}>{item}</li>
          ))}
        </ul>
        <p>{getFormattedDate(post.date)}</p>
      </div>
    </div>
  );
}
