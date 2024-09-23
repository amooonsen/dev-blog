import React from 'react';

// components
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import PostImage from './PostImage';

// icons
import { Calendar } from 'lucide-react';
import { BookAIcon } from 'lucide-react';

// ilbs
import { getFormattedDate } from '@/lib/date';

// types
import { Post } from '@/types/Post';

interface PostHeadProps {
  post: Post;
}

export default function PostHead({ post }: PostHeadProps) {
  return (
    <Section id="postHead">
      <div className="flex flex-col space-y-8 mb-8">
        <h1 className="text-5xl font-bold">{post?.title}</h1>
        <div className="flex gap-3 text-slate-500 dark:text-slate-200">
          <div className="flex items-center gap-1">
            <Calendar width={20} height={20} />
            <time className="text-base">{post.dateString}</time>
          </div>
          <div className="flex items-center gap-1">
            <BookAIcon width={20} height={20} />
            <span>3분</span>
          </div>
        </div>
        <ul className="flex gap-3 mt-8">
          {post.tags.map((item: string, index: number) => (
            <li key={`post-tags-${index}`}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-12">
        <PostImage src={post.thumbnail} alt={post.thumbnailAlt} type="thumbnail" />
      </div>
    </Section>
  );
}
