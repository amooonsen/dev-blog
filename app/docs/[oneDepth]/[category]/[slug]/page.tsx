import React from 'react';
import path from 'path';

// meta
import { Metadata } from 'next';

// components
import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';
import PostFooter from './_components/PostFooter';

// constants
import { blogName, baseDomain } from '@/constants/metaInfoConst';

// repo
import { PostDetailRepository } from '@/service/PostDetailRepository';
import { PostParser } from '@/service/PostParser';
import { PostRepository } from '@/service/PostRepository';

// utils
import { extractCategoryAndSlug } from '@/lib/path';

interface PostDetailProps {
  params: {
    onedepth: string;
    category: string;
    slug: string;
  };
}

export const dynamicParams = true;

// export async function generateStaticParams() {
//   const postDetailRepository = new PostDetailRepository();
//   const postPaths: string[] = postDetailRepository.getPostFilePaths();

//   const paramList = await Promise.all(
//     postPaths.map(async (postPath) => {
//       const { onedepth, category, slug } = extractCategoryAndSlug(
//         postPath,
//         postDetailRepository.POSTS_PATH
//       );
//       return {
//         onedepth,
//         category,
//         slug,
//       };
//     })
//   );
//   return paramList;
// }

export async function generateMetadata({
  params: { onedepth, category, slug },
}: PostDetailProps): Promise<Metadata> {
  const postDetailRepository = new PostDetailRepository(onedepth);
  const postDetail = await postDetailRepository.fetchPostDetail(category, slug);

  const title = `${postDetail.title} | ${blogName}`;
  const imageURL = `${baseDomain}${postDetail.thumbnail}`;
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

export default async function PostDetail({
  params: { onedepth, category, slug },
}: PostDetailProps) {
  const postRepository = new PostRepository(onedepth);
  const postDetailRepository = new PostDetailRepository(onedepth);

  const postDetail = await postDetailRepository.fetchPostDetail(category, slug);
  const postList = await postRepository.fetchPostList();

  return (
    <main className="mx-auto mt-20">
      <PostHead post={postDetail} />
      <PostBody post={postDetail} />
      <PostFooter postList={postList} />
    </main>
  );
}

// 모바일에서는 코드 영역이 완전히 보이지 않을 수 있어요.
// 스낵바로 띄우기
