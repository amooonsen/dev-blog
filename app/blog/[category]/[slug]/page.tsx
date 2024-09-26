import React, { Suspense } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// components
import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';
import PostFooter from './_components/PostFooter';

// repo
import { PostDetailRepository } from '@/service/PostDetailRepository';
import { PostParser } from '@/service/PostParser';

// meta
import { Metadata } from 'next';
import { blogName, baseDomain } from '@/constants/metaInfoConst';

interface PostDetailProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const postParser = new PostParser();
  const postDetailRepository = new PostDetailRepository();
  const postPaths: string[] = postDetailRepository.getPostFilePaths();

  const paramList = await Promise.all(
    postPaths.map(async (path) => {
      const item = await postParser.parsePost(path, '/posts');
      console.log(`path ${path}`);
      console.log(`categoryPath ${item.categoryPath}`);
      console.log(`item.slug ${item.slug}`);
      return {
        category: item.categoryPath,
        slug: item.slug,
      };
    })
  );
  return paramList;
}

export async function generateMetadata({
  params: { category, slug },
}: PostDetailProps): Promise<Metadata> {
  const postDetailRepository = new PostDetailRepository();
  const postDetail = await postDetailRepository.fetchPostDetail(category, slug);

  const title = `${postDetail.title} | ${blogName}`;
  const imageURL = `${baseDomain}${postDetail.thumbnail}`;
  console.log(imageURL);
  return {
    title,
    description: postDetail.desc,
    openGraph: {
      title,
      description: postDetail.desc,
      type: 'article',
      url: `${baseDomain}${postDetail.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: postDetail.desc,
      // images: [imageURL],
    },
  };
}

export default async function PostDetail({ params: { category, slug } }: PostDetailProps) {
  const postDetailRepository = new PostDetailRepository();
  const postDetail = await postDetailRepository.fetchPostDetail(category, slug);

  return (
    <main className="mx-auto mt-20">
      <PostHead post={postDetail} />
      <PostBody post={postDetail} />
      <PostFooter />
    </main>
  );
}

// 모바일에서는 코드 영역이 완전히 보이지 않을 수 있어요.
// 스낵바로 띄우기
