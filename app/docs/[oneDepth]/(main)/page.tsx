// components
import PostListPage from '../../../_components/PostListPage';

import { PostRepository } from '@/service/PostRepository';

// types
import { ListPageProps } from '@/types/TypePage';

export async function generateStaticParams() {
  const paths = ['tech', 'newsletter', 'life'];

  const postRepository = new PostRepository();
  const categories = await postRepository.fetchCategoryList();

  // 필요한 데이터만 추출 (dirName)
  const categoryPaths = categories.map((categoryDetail) => categoryDetail.dirName);

  const params = paths.flatMap((oneDepth) =>
    categoryPaths.map((category) => ({
      oneDepth,
      category,
    }))
  );

  return params;
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
