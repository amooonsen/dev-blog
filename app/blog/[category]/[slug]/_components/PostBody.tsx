import React from 'react';
import { Post } from '@/types/Post';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return <MDXRemote source={post.content} />;
}
