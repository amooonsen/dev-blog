import React, { ReactElement } from 'react';

// components
import PostThumbnail from './PostThumbnail';

// types
import { Post } from '@/types/Post';

interface PostThumbnailListProps {
  postList: Post[];
  category: string;
  selectedTags: string[];
}

export default async function PostThumbnailList({
  postList,
  category,
  selectedTags,
}: PostThumbnailListProps) {
  let heading: string = '';

  const renderCategoryText = () => {
    postList.forEach((item) => {
      const filteredTag = item.tags?.filter((tag: string) =>
        selectedTags.some((selectedTag) => tag.includes(selectedTag))
      );

      if (item.categoryPath === category) {
        heading = item.categoryPublicName;
      } else if (filteredTag && filteredTag.length > 0) {
        heading = selectedTags.join(', ');
      }
    });

    return heading;
  };
  return (
    <>
      <h2 className="text-3xl font-bold">{renderCategoryText() || 'All posts'}</h2>
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
