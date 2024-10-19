// components
import PostListPage from '../../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  const paths = [{ oneDepth: 'tech' }, { oneDepth: 'newsletter' }, { oneDepth: 'life' }];
  const pathList = paths.map((oneDepth) => ({ oneDepth }));
  return pathList;
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
