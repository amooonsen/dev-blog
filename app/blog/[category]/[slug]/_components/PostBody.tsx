import React from 'react';

// components
import { MdxComponents } from '@/components/markdown';

// types
import { Post } from '@/types/Post';

// libs
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkA11yEmoji from '@fec/remark-a11y-emoji';

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            // pretty code block
            [
              // @ts-ignore
              rehypePrettyCode,
              {
                theme: { dark: 'github-dark-dimmed', light: 'github-light' },
              },
            ],
            // toc id를 추가하고 제목을 연결
            rehypeSlug,
          ],
        },
      }}
      // components={MdxComponents}
    />
  );
}
