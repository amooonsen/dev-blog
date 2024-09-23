import React from 'react';

import { getFormattedDate } from '@/lib/date';

import { Post } from '@/types/Post';

interface PostHeadProps {
  post: Post;
}

export default function PostHead({ post }: PostHeadProps) {
  return (
    <section className="mx-auto mt-20" id="postHead">
      <h1>{post?.title}</h1>
      <p>{post.preview}</p>
      <div>
        <ul>
          {post.tags.map((item: string, index: number) => (
            <li key={`post-tags-${index}`}>{item}</li>
          ))}
        </ul>
        <p>{getFormattedDate(post.date)}</p>
      </div>
      <img src={post?.thumbnail} alt={post.thumbnailAlt} />
    </section>
  );
}
