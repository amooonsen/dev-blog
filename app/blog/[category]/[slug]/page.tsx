import React, { Suspense } from 'react';
import PostHead from './_components/PostHead';
import PostBody from './_components/PostBody';
import PostFooter from './_components/PostFooter';
import PostHeadSkeleton from '@/components/loading/PostHeadSkeleton';
import PostBodySkeleton from '@/components/loading/PostBodySkeleton';

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

// export const dynamicParams = false;

export async function generateStaticParams() {
  const postParser = new PostParser();
  const postDetailRepository = new PostDetailRepository();
  const postPaths: string[] = postDetailRepository.getPostFilePaths();

  const paramList = postPaths.map(async (path) => {
    const item = await postParser.parsePost(path, '/posts');
    return {
      category: item.categoryPath,
      slug: item.slug,
    };
  });
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
      <Suspense fallback={<PostHeadSkeleton />}>
        <PostHead post={postDetail} />
      </Suspense>
      <Suspense fallback={<PostBodySkeleton />}>
        <PostBody post={postDetail} />
      </Suspense>
      <PostFooter />
    </main>
  );
}
