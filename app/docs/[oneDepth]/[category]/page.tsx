import { Metadata } from 'next';

import PostListPage from '@/app/_components/PostListPage';
// import { baseDomain, blogName, blogThumbnailURL } from '@/config/const';
import { getCategoryList, getCategoryPublicName } from '@/lib/post';

// types
import { ListPageProps } from '@/types/TypePage';

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

// export async function generateMetadata({ params: { category } }: Props): Promise<Metadata> {
//   const cg = getCategoryPublicName(category);
//   const title = `${cg} | ${blogName}`;
//   const url = `${baseDomain}/${category}`;

//   return {
//     title,
//     openGraph: {
//       title,
//       url,
//       images: [blogThumbnailURL],
//     },
//     twitter: {
//       title,
//       images: [blogThumbnailURL],
//     },
//   };
// }

const CategoryPage = async ({ params, searchParams }: ListPageProps) => {
  return <PostListPage params={params} searchParams={searchParams} />;
};

export default CategoryPage;
