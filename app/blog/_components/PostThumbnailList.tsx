import React from 'react';

// components
import PostThumbnail from './PostThumbnail';

// lib
import { PostRepository } from '@/lib/parse';

interface PostThumbnailListProps {
  category?: string;
}

export default async function PostThumbnailList({ category }: PostThumbnailListProps) {
  const postRepository = new PostRepository();
  const postList = await postRepository.fetchSortedPostList(category);
  console.log(postList);
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
      {postList.map((post) => (
        <PostThumbnail key={post.url + post.date} post={post} />
      ))}
    </ul>
  );
}
