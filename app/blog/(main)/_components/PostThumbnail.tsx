import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import { Badge } from '@/components/ui/badge';

// types
import { Post } from '@/types/Post';

// utils
import { getBase64Image } from '@/lib/sharp';
import { getFormattedDate } from '@/lib/date';

interface PostThumbnailProps {
  post: Post;
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  const fetchBase64 = async () => {
    const base64 = await getBase64Image(`public${post.thumbnail}`);
    return base64;
  };

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
              blurDataURL={fetchBase64() as unknown as string}
              className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="relative flex justify-center items-center aspect-video w-full rounded-md border overflow-hidden">
            <span>No Image</span>
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
      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <time className="text-sm text-gray-500 dark:text-gray-200">{post.dateString}</time>
        <Badge>
          <Link href={`/blog/${post.categoryPath}`}>{post.categoryPublicName}</Link>
        </Badge>
      </div>
    </li>
  );
}
