// 추후 newsletters 진행 시 사용 예정
// import path from 'path';
// import { PostParser } from './PostParser';

// export abstract class BaseRepository {
//   protected readonly BASE_PATH: string;
//   protected readonly POSTS_PATH: string;
//   protected postParser: PostParser;

//   constructor(basePath: string, postParser?: PostParser) {
//     this.BASE_PATH = basePath;
//     this.POSTS_PATH = path.join(process.cwd(), this.BASE_PATH);
//     this.postParser = postParser || new PostParser();
//   }
// }

// repositories/BaseRepository.ts

import { sync } from 'glob';

import path from 'path';
import { PostParser } from './PostParser';

export abstract class BaseRepository {
  protected readonly BASE_PATH: string;
  protected readonly POSTS_PATH: string;
  protected postParser: PostParser;

  constructor(basePath: string) {
    this.BASE_PATH = basePath;
    this.POSTS_PATH = path.join(process.cwd(), this.BASE_PATH);
    console.log(this.POSTS_PATH);
    this.postParser = new PostParser();
  }

  public getPostFilePaths(category?: string): string[] {
    const folder = category || '**';
    return sync(`${this.POSTS_PATH}/${folder}/**/*.mdx`);
  }
}
