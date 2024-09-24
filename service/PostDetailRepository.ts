// repositories/PostDetailRepository.ts

import { IPostDetailRepository } from './IPostDetailRepository';
import { BaseRepository } from './BaseRepository';
import path from 'path';
import { Post } from '@/types/Post';

export class PostDetailRepository extends BaseRepository implements IPostDetailRepository {
  constructor() {
    super();
  }

  public async fetchPostDetail(category: string, slug: string): Promise<Post> {
    const filePath = path.join(this.POSTS_PATH, category, slug, 'content.mdx');
    const postDetail = await this.postParser.parsePost(filePath, this.POSTS_PATH);
    return postDetail;
  }
}
