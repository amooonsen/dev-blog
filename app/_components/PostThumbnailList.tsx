import React, { ReactElement } from 'react';

// components
import PostThumbnail from './PostThumbnail';

// types
import { Post } from '@/types/TypePost';

interface PostThumbnailListProps {
  posts: Post[];
  category: string;
  selectedTags: string[];
}

export default async function PostThumbnailList({
  posts,
  category,
  selectedTags,
}: PostThumbnailListProps) {
  let heading: string = '';

  const renderCategoryText = () => {
    posts.forEach((item) => {
      const filteredTag = item.tags?.filter((tag: string) =>
        selectedTags?.some((selectedTag) => tag.includes(selectedTag))
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
      <h2 className="text-3xl font-bold">{renderCategoryText() || '모든 글 보기'}</h2>
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {posts.map(
          (post: Post): ReactElement => (
            <PostThumbnail key={post.url} post={post} />
          )
        )}
      </ul>
    </>
  );
}
