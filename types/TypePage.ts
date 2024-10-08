type TypeOneDepth = 'tech' | 'newsletter' | 'life';

export type ListPageProps = {
  params: { oneDepth: TypeOneDepth; category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type SortType = 'tag' | 'sort';
