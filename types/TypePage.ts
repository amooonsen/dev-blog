type TypeOneDepth = 'tech' | 'newsletter' | 'life';

export type ListPageProps = {
  params: { onedepth: TypeOneDepth; category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type SortType = 'tag' | 'sort';
