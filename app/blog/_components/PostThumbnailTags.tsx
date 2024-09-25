'use client';

import React, { ReactElement } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Post } from '@/types/TypePost';

interface PostThumbnailTagsProps {
  post: Post;
}

export default function PostThumbnailTags({ post }: PostThumbnailTagsProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: string) => {
    const currentUrl = new URL(`/blog?tags=${item}`, window.location.origin);

    if (window.location.href === currentUrl.href) {
      event.preventDefault();
    } else {
      router.push(currentUrl.href);
    }
  };

  return (
    <ul className="flex flex-wrap gap-1 items-center mt-4 pt-4 border-t">
      {post.tags?.map(
        (item: string, index: number): ReactElement => (
          <li className="mr-2" key={`thumbnail-tags-${index}`}>
            <Link
              className="text-xs relative text-gray-600 transition-all duration-300 hover:text-primary"
              href={`/blog?tags=${item}`}
              onClick={(event) => handleClick(event, item)}
            >
              {item}
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-transparent transition-all duration-300 hover:bg-primary hover:w-full"></span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
