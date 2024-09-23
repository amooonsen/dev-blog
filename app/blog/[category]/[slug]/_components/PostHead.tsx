import React from 'react';

// components
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
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
      <div className="flex flex-col space-y-8">
        <h1 className="text-5xl font-bold">{post?.title}</h1>
        <div className="flex gap-3 text-slate-500 dark:text-slate-200">
          <div className="flex items-center gap-1">
            <Calendar width={16} height={16} />
            <time className="text-base">{getFormattedDate(post.date)}</time>
          </div>
          <div className="flex items-center gap-1">
            <BookAIcon width={16} height={16} />
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
      <img className="block mt-4" src={post?.thumbnail} alt={post.thumbnailAlt} />
    </Section>
  );
}
