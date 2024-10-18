import path from 'path';

// 경로로부터 카테고리와 슬러그를 추출하는 함수
export function extractCategoryAndSlug(
  postPath: string,
  basePath: string
): { oneDepth: string; category: string; slug: string } {
  const relativePath = path.relative(basePath, postPath).replace('.mdx', '');
  const segments = relativePath.split(path.sep);
  const oneDepth = segments[segments.length - 4];
  const category = segments[segments.length - 3];
  const slug = segments[segments.length - 2];
  return { oneDepth, category, slug };
}

// 카테고리 이름을 포맷팅하는 함수
export function formatCategoryName(dirPath: string): string {
  return dirPath
    .split('_')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}
