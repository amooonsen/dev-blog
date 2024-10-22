// 경로로부터 카테고리와 슬러그를 추출하는 함수
export function extractCategoryAndSlug(
  postPath: string,
  basePath: string
): { onedepth: string; category: string; slug: string } {
  const basePathParts = basePath.split('/');
  const lastPart = basePathParts.pop();
  const filePath = postPath
    .slice(postPath.indexOf(basePath))
    .replace(basePath, '' + `/${lastPart}`)
    .replace('.mdx', '');

  const [_, onedepth, category, slug] = filePath.split('/');
  console.log(`Extracted path - onedepth: ${onedepth}, category: ${category}, slug: ${slug}`);

  return { onedepth, category, slug };
}

// 카테고리 이름을 포맷팅하는 함수
export function formatCategoryName(dirPath: string): string {
  return dirPath
    .split('_')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}
