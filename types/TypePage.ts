export type ListPageProps = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type SortType = 'tag' | 'sort';
