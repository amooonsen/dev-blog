// components
import PostListPage from '../../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  const paths = ['tech', 'newsletter', 'life'];
  console.log(paths.map((oneDepth) => ({ oneDepth })));
  return paths.map((oneDepth) => ({ oneDepth }));
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  const { oneDepth, category } = params ?? { oneDepth: '', category: '' };

  if (!oneDepth) {
    console.error('oneDepth 값이 설정되지 않았습니다.');
    return <div>잘못된 접근입니다. 경로를 확인하세요.</div>;
  }

  return <PostListPage params={{ oneDepth, category }} searchParams={searchParams} />;
};

export default Blog;
