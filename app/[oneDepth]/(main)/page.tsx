import { notFound } from 'next/navigation';

// components
import PostListPage from '../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

const Blog = async ({ params, searchParams }: ListPageProps) => {
  if (
    params.oneDepth !== 'tech' &&
    params.oneDepth !== 'newsletter' &&
    params.oneDepth !== 'life'
  ) {
    notFound();
  }
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
