import React from 'react';

// components
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import PostImage from './PostImage';

// icons
import { Calendar } from 'lucide-react';
import { BookAIcon } from 'lucide-react';

// types
import { Post } from '@/types/Post';
import Link from 'next/link';

interface PostHeadProps {
  post: Post;
}

export default function PostHead({ post }: PostHeadProps) {
  return (
    <Section id="postHead">
      <div className="flex flex-col space-y-6 mb-8">
        <h1 className="text-5xl leading-snug font-bold">{post?.title}</h1>
        <div className="flex gap-3 text-slate-500 dark:text-slate-200">
          <div className="flex items-center gap-1">
            <Calendar width={20} height={20} />
            <time className="text-base">{post.dateString}</time>
          </div>
          <div className="flex items-center gap-1">
            <BookAIcon width={20} height={20} />
            <span>{post.readingMinutes}분</span>
          </div>
        </div>
        <dl className="flex gap-3">
          <dt>Category</dt>
          <dd>
            <Link href={`/blog/${post.categoryPath}`}>{post.categoryPublicName}</Link>
          </dd>
        </dl>
        <dl className="flex gap-3">
          <dt>Keywords</dt>
          {post.tags?.map((item: string, index: number) => (
            <dd key={`post-tags-${index}`}>
              <Badge>{item}</Badge>
            </dd>
          ))}
        </dl>
      </div>
      <div className="border-t pt-12">
        {post.thumbnail && (
          <PostImage src={post.thumbnail} alt={post.thumbnailAlt} type="thumbnail" />
        )}
      </div>
    </Section>
  );
}
