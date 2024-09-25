import PostListPage from '../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
