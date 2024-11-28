import { glob, sync } from 'glob';

import path from 'path';
import { PostParser } from './PostParser';

export abstract class BaseRepository {
  protected readonly BASE_PATH: string;
  readonly POSTS_PATH: string;
  protected postParser: PostParser;

  constructor(basePath: string = '') {
    this.BASE_PATH = basePath;
    this.POSTS_PATH = basePath ? path.join(process.cwd(), basePath) : process.cwd();
    this.postParser = new PostParser();
  }

  getPostFilePaths(category?: string): string[] {
    try {
      const pattern = category
        ? path.join(this.POSTS_PATH, category, '**/content.mdx')
        : path.join(this.POSTS_PATH, '**/content.mdx');

      return glob.sync(pattern, {
        ignore: ['**/node_modules/**', '**/.next/**'],
      });
    } catch (error) {
      console.error('Error reading post files:', error);
      return [];
    }
  }
}
