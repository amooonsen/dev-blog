import { Post } from '@/types/TypePost';

export interface IPostDetailRepository {
  fetchPostDetail(category: string, slug: string): Promise<Post>;
}
