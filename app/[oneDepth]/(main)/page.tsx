// components
import PostListPage from '../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  const paths = [{ oneDepth: 'tech' }, { oneDepth: 'newsletter' }, { oneDepth: 'life' }];
  console.log('Static Paths:', paths);
  return paths;
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
