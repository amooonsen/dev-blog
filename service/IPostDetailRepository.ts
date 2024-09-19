import { Post } from '@/types/Post';

export interface IPostDetailRepository {
  fetchPostDetail(category: string, slug: string): Promise<Post>;
}
