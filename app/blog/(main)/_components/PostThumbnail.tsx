import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// types
import { Post } from '@/types/Post';

interface PostThumbnailProps {
  post: Post;
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  return (
    <li>
      <Link href={`${post.url}`}>
        {/* 썸네일 이미지 */}
        <div className="relative aspect-video w-full rounded-t-md border-b">
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes="(max-width: 1000px) 50vw, 450px"
            fill
            priority
            className="object-cover"
          />
        </div>
        <h2 className="mt-8 text-2xl font-semibold">{post.title}</h2>
        <p className="text-overflow text-base text-slate-500">{post.preview}</p>
        <time>{post.creationDate}</time>
        {/* 태그 */}
        {/* <ul>
          {post.tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul> */}
      </Link>
    </li>
  );
}
