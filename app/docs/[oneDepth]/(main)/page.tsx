// components
import PostListPage from '../../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  return [{ onedepth: 'tect' }, { onedepth: 'newsletter' }, { onedepth: 'life' }];
}

const Blog = async ({ params, searchParams }: ListPageProps) => {
  if (!params.onedepth) {
    console.error('onedepth 값이 설정되지 않았습니다.');
    return <div>잘못된 접근입니다. 경로를 확인하세요.</div>;
  }

  return <PostListPage params={params} searchParams={searchParams} />;
};

export default Blog;
