import PostListPage from '../_components/PostListPage';

// types
import { ListPageProps } from '@/types/Page';

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
