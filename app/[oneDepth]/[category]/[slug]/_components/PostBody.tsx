import React from 'react';

// components
import { MdxComponents } from '@/components/markdown';
import { Section } from '@/components/ui/section';

// types
import { Post } from '@/types/TypePost';

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

const rehypeOptions = {
  theme: 'slack-dark',
  keepBackground: true,
};

export default function PostBody({ post }: PostBodyProps) {
  return (
    <Section id="postBody" className="prose mt-16 mb-32">
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
            rehypePlugins: [[rehypePrettyCode, rehypeOptions], rehypeSlug],
          },
        }}
        components={MdxComponents}
      />
    </Section>
  );
}
