import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import { Badge } from '@/components/ui/badge';

// types
import { Post } from '@/types/Post';

interface PostThumbnailProps {
  post: Post;
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  return (
    <li>
      <Link className="group" href={`${post.url}`}>
        {post.thumbnail ? (
          <div className="relative aspect-video w-full rounded-md overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.thumbnailAlt}
              sizes="(max-width: 1000px) 50vw, 450px"
              fill
              priority
              className="object-cover transition-all duration-500 ease-out group-hover:scale-105 bg-foreground"
            />
          </div>
        ) : (
          <div className="relative flex justify-center items-center aspect-video w-full rounded-md bg-foreground overflow-hidden">
            <span className="text-sm text-white dark:text-black">No Image</span>
          </div>
        )}
        <div className="flex flex-col space-y-4">
          <h3 className="text-overflow line-one relative inline-block mt-4 text-lg font-semibold">
            {post.title}
          </h3>
          <p className="text-overflow line-two text-base h-12 text-slate-500 dark:text-slate-200">
            {post.preview}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-4 pt-4 border-t ">
        <time className="text-sm text-gray-500 dark:text-gray-200">{post.dateString}</time>
        <Badge variant="tags">
          <Link href={`/blog/${post.categoryPath}`}>#{post.categoryPublicName}</Link>
        </Badge>
      </div>
    </li>
  );
}
