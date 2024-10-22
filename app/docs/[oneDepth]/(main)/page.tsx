// components
import PostListPage from '../../../_components/PostListPage';

// types
import { ListPageProps } from '@/types/TypePage';

// repo
import { PostRepository } from '@/service/PostRepository';

// utils
import { formatCategoryName, extractCategoryAndSlug } from '@/lib/path';

export async function generateStaticParams() {
  const postRepository = new PostRepository();
  const postPaths: string[] = await postRepository.getPostFilePaths(); // 비동기 처리가 필요하다면 await 추가

  const categoryList = await Promise.all(
    postPaths.map(async (postPath) => {
      const { oneDepth, category } = extractCategoryAndSlug(postPath, postRepository.POSTS_PATH);
      return {
        oneDepth,
        category,
      };
    })
  );

  return categoryList.filter((item) => item.oneDepth && item.category); // 필터링하여 빈 값 제거
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
