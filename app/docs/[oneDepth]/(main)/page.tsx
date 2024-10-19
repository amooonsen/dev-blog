// components
import PostListPage from '../../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  // [oneDepth] 경로들을 정적으로 미리 생성하도록 paths를 정의합니다.
  const paths = ['tech', 'newsletter', 'life'];

  // 각 path에 대해 { oneDepth: 값 } 형태로 반환합니다.
  return paths.map((oneDepth) => ({ oneDepth }));
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  // params가 제대로 설정되었는지 확인하고 기본값을 설정합니다.
  const { oneDepth, category } = params ?? { oneDepth: '', category: '' };

  if (!oneDepth) {
    console.error('oneDepth 값이 설정되지 않았습니다.');
    return <div>잘못된 접근입니다. 경로를 확인하세요.</div>;
  }

  return <PostListPage params={{ oneDepth, category }} searchParams={searchParams} />;
};

export default Blog;
