import { readFileSync } from 'fs';
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
// @ts-expect-error: remark-a11y-emoji has no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';

interface PostBodyProps {
  post: Post;
}

// const prettyCodeOptions = {
//   theme: {
//     dark: JSON.parse(readFileSync('./code_theme/one-dark-pro-darker.json', 'utf-8')),
//     light: JSON.parse(readFileSync('./code_theme/atom-one-light.json', 'utf-8')),
//   },
// };

export default function PostBody({ post }: PostBodyProps) {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            [rehypePrettyCode],
            // toc id를 추가하고 제목을 연결
            rehypeSlug,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
}
