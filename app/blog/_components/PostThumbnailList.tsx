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
  let heading: string = '';

  const renderCateogryText = () => {
    postList.find((item) => {
      if (item.categoryPath === category) {
        heading = item.categoryPublicName;
      }
    });

    return heading;
  };
  return (
    <>
      <h2 className="text-3xl font-bold">{renderCateogryText() || 'All posts'}</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
        {postList.map(
          (post: Post): ReactElement => (
            <PostThumbnail key={post.url} post={post} />
          )
        )}
      </ul>
    </>
  );
}
