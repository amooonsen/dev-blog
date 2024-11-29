import path from 'path';

// 경로로부터 카테고리와 슬러그를 추출하는 함수
export function extractCategoryAndSlug(
  postPath: string,
  basePath: string
): { onedepth: string; category: string; slug: string } {
  const relativePath = path.relative(process.cwd(), postPath);
  const pathParts = relativePath.split(path.sep);

  // onedepth 디렉토리 목록
  const validOnedepths = ['tech', 'newsletter', 'life'];

  const onedepth = validOnedepths.find((dep) => pathParts.includes(dep)) || 'tech';
  const onedepthIndex = pathParts.indexOf(onedepth);

  const category = encodeURIComponent(pathParts[onedepthIndex + 1] || '');
  console.log('category:', category);

  const slug = pathParts[onedepthIndex + 2] || '';
  console.log('slug:', slug);

  console.log('Path extraction:', {
    relativePath,
    pathParts,
    onedepth,
    category,
    slug,
  });

  return { onedepth, category, slug };
}

// 카테고리 이름을 포맷팅하는 함수
export function formatCategoryName(dirPath: string): string {
  return dirPath
    .split('_')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}
