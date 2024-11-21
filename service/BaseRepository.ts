import { glob, sync } from 'glob';

import path from 'path';
import { PostParser } from './PostParser';

export abstract class BaseRepository {
  protected readonly BASE_PATH: string;
  readonly POSTS_PATH: string;
  protected postParser: PostParser;

  constructor(basePath: string = '/tech') {
    this.BASE_PATH = basePath;
    this.POSTS_PATH = path.join(process.cwd(), this.BASE_PATH);
    this.postParser = new PostParser();
  }

  // PostDetailRepository {
  //   BASE_PATH: '',
  //   POSTS_PATH: '/Users/cho/Desktop/코딩/workspace/개인/사이드/dev-blog',
  //   postParser: PostParser {}
  // }

  getPostFilePaths(category?: string): string[] {
    try {
      const pattern = category
        ? path.join(this.POSTS_PATH, category, '**/content.mdx')
        : path.join(this.POSTS_PATH, '**/content.mdx');

      return glob.sync(pattern);
    } catch (error) {
      console.error('Error reading post files:', error);
      return [];
    }
  }
}
