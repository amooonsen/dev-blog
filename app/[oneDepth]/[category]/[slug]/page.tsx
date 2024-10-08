import React, { Suspense } from 'react';

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
import { PostRepository } from '@/service/PostRepository';

interface PostDetailProps {
  params: {
    category: string;
    slug: string;
  };
}

// export async function generateStaticParams() {
//   const postParser = new PostParser();
//   const postDetailRepository = new PostDetailRepository();
//   const postPaths: string[] = postDetailRepository.getPostFilePaths();

//   const paramList = await Promise.all(
//     postPaths.map(async (path) => {
//       const item = await postParser.parsePost(path, '/posts');
//       return {
//         category: item.categoryPath,
//         slug: item.slug,
//       };
//     })
//   );
//   return paramList;
// }

export async function generateMetadata({
  params: { category, slug },
}: PostDetailProps): Promise<Metadata> {
  const postDetailRepository = new PostDetailRepository(slug);
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

export default async function PostDetail({ params: { category, slug } }: PostDetailProps) {
  const postRepository = new PostRepository(category);
  const postDetailRepository = new PostDetailRepository(slug);

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
