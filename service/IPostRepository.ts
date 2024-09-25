import { Post, CategoryDetail } from '@/types/TypePost';

export interface IPostRepository {
  fetchPostList(category?: string): Promise<Post[]>;
  fetchFilteredAndSortedPostList(
    category: string | undefined,
    selectedTags: string[],
    sortOption: string
  ): Promise<Post[]>;
  fetchAllPostCount(): Promise<number>;
  fetchCategoryList(): Promise<CategoryDetail[]>;
}
