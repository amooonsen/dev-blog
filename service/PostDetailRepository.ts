// repositories/PostDetailRepository.ts

import { IPostDetailRepository } from './IPostDetailRepository';
import { BaseRepository } from './BaseRepository';
import path from 'path';
import { Post } from '@/types/TypePost';

export class PostDetailRepository extends BaseRepository implements IPostDetailRepository {
  public async fetchPostDetail(category: string, slug: string): Promise<Post> {
    const filePath = path.join(this.POSTS_PATH, category, slug, 'content.mdx');
    const postDetail = await this.postParser.parsePost(filePath, this.POSTS_PATH);
    // console.log(this.POSTS_PATH);
    // console.log(postDetail);
    // console.log(filePath);
    return postDetail;
  }
}

// 241010 local log
// Error: ENOENT: no such file or directory, open '/Users/cho/Desktop/코딩/workspace/개인/사이드/dev-blog/typescript_oop_1/frontend/typescript_oop_1/content.mdx'
