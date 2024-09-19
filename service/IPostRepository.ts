import { Post, CategoryDetail } from '@/types/Post';

export interface IPostRepository {
  fetchPostList(category?: string): Promise<Post[]>;
  fetchSortedPostList(category?: string): Promise<Post[]>;
  fetchAllPostCount(): Promise<number>;
  fetchCategoryList(): Promise<CategoryDetail[]>;
}
