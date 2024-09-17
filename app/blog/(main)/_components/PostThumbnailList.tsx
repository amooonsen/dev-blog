import React, { ReactElement } from 'react';

// components
import PostThumbnail from './PostThumbnail';

// types
import { Post } from '@/types/Post';

interface PostThumbnailListProps {
  postList: Post[];
  category?: string;
}

export default async function PostThumbnailList({ postList, category }: PostThumbnailListProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
      {postList.map(
        (post: Post): ReactElement => (
          <PostThumbnail key={post.url + post.date} post={post} />
        )
      )}
    </ul>
  );
}
