// components
import PostListPage from '../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export const dynamic = 'force-static';

// export async function generateStaticParams() {
//   const paths = [{ oneDepth: 'tech' }, { oneDepth: 'newsletter' }, { oneDepth: 'life' }];
//   console.log('Static Paths:', paths);
//   return paths;
// }

export async function generateStaticParams() {
  return [];
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
