// repositories/PostDetailRepository.ts

import { IPostDetailRepository } from './IPostDetailRepository';
import { BaseRepository } from './BaseRepository';
import path from 'path';
import { Post } from '@/types/TypePost';
import * as glob from 'glob';

export class PostDetailRepository extends BaseRepository implements IPostDetailRepository {
  public async fetchPostDetail(category: string, slug: string): Promise<Post> {
    const filePath = path.join(this.POSTS_PATH, category, slug, 'content.mdx');
    const postDetail = await this.postParser.parsePost(filePath, this.POSTS_PATH);
    return postDetail;
  }

  public getAllPostPaths(): string[] {
    return this.getPostFilePaths();
  }

  public getPostFilePaths(): string[] {
    const rootDir = process.cwd();
    const onedepths = ['tech', 'newsletter', 'life'];
    
    try {
      return onedepths.flatMap(onedepth => {
        const pattern = path.join(rootDir, onedepth, '**', 'content.mdx');
        return glob.sync(pattern, {
          ignore: ['**/node_modules/**', '**/.next/**']
        });
      });
    } catch (error) {
      console.error('Error reading post files:', error);
      return [];
    }
  }
}

// 241010 local log
// Error: ENOENT: no such file or directory, open '/Users/cho/Desktop/코딩/workspace/개인/사이드/dev-blog/typescript_oop_1/frontend/typescript_oop_1/content.mdx'
