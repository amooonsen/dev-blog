import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import { Badge } from '@/components/ui/badge';

// types
import { Post } from '@/types/Post';

// utils
import { getBase64Image } from '@/lib/sharp';

interface PostThumbnailProps {
  post: Post;
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  const fetchBase64 = async () => {
    const base64 = await getBase64Image(`public${post.thumbnail}`);
    return base64;
  };

  return (
    <li className="group">
      <Link href={`${post.url}`}>
        <div className="relative aspect-video w-full rounded-t-md border-b overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes="(max-width: 1000px) 50vw, 450px"
            fill
            priority
            blurDataURL={fetchBase64()}
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="relative inline-block mt-4 text-2xl font-semibold">{post.title}</h3>
          <p className="text-overflow text-base text-slate-500">{post.preview}</p>
          {/* <time>{post.date}</time> */}
        </div>
      </Link>
      <ul className="flex gap-2 mt-4">
        {post.tags?.map((tag: string, index: number) => (
          <li key={`post-tags-${index}`}>
            <Badge className="cursor-pointer">{tag}</Badge>
          </li>
        ))}
      </ul>
    </li>
  );
}
