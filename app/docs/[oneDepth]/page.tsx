// components
import PostListPage from '../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

// export async function generateStaticParams() {
//   return [{ onedepth: 'tect' }, { onedepth: 'newsletter' }, { onedepth: 'life' }];
// }

export const dynamicParams = false;

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
