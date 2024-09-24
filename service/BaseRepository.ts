// // repositories/BaseRepository.ts

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

import path from 'path';
import { PostParser } from './PostParser';

export abstract class BaseRepository {
  protected readonly BASE_PATH = '/posts';
  protected readonly POSTS_PATH: string;
  protected postParser: PostParser;

  constructor() {
    this.POSTS_PATH = path.join(process.cwd(), this.BASE_PATH);
    this.postParser = new PostParser();
  }
}
