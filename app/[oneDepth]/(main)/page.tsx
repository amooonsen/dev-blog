// components
import PostListPage from '../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  return [{ oneDepth: 'tech' }, { oneDepth: 'newsletter' }, { oneDepth: 'life' }];
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
