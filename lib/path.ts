import path from 'path';

// 경로로부터 카테고리와 슬러그를 추출하는 함수
export function extractCategoryAndSlug(
  postPath: string,
  basePath: string
): { onedepth: string; category: string; slug: string } {
  const relativePath = path.relative(process.cwd(), postPath);
  const pathParts = relativePath.split(path.sep);

  const relevantParts = pathParts.filter(
    (part) => part !== 'content.mdx' && part !== 'posts' && part !== 'src'
  );

  const onedepth = relevantParts[0];
  const category = encodeURIComponent(relevantParts[1]);
  const slug = relevantParts[2];

  console.log('Extracting path parts:', {
    relativePath,
    relevantParts,
    result: { onedepth, category, slug },
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
