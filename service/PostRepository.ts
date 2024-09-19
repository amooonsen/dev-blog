// repositories/PostRepository.ts

import { IPostRepository } from './IPostRepository';
import { PostParser } from './PostParser';
import { sync } from 'glob';
import path from 'path';
import { Post, CategoryDetail } from '@/types/Post';

export class PostRepository implements IPostRepository {
  private readonly BASE_PATH = '/posts';
  private readonly POSTS_PATH = path.join(process.cwd(), this.BASE_PATH);
  private postParser: PostParser;

  constructor() {
    this.postParser = new PostParser();
  }

  private getPostFilePaths(category?: string): string[] {
    const folder = category || '**';
    return sync(`${this.POSTS_PATH}/${folder}/**/*.mdx`);
  }

  public async fetchPostList(category?: string): Promise<Post[]> {
    const postPaths = this.getPostFilePaths(category);
    const postPromises = postPaths.map((postPath) =>
      this.postParser.parsePost(postPath, this.POSTS_PATH)
    );
    const posts = await Promise.all(postPromises);
    return posts;
  }

  private sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  }

  public async fetchSortedPostList(category?: string): Promise<Post[]> {
    const posts = await this.fetchPostList(category);
    return this.sortPostsByDate(posts);
  }

  public async fetchAllPostCount(): Promise<number> {
    return (await this.fetchPostList()).length;
  }

  public async fetchCategoryList(): Promise<CategoryDetail[]> {
    try {
      const postList = await this.fetchPostList();
      const categoryCountMap: {
        [key: string]: number;
      } = {};

      for (const post of postList) {
        const category = post.categoryPath;
        categoryCountMap[category] = (categoryCountMap[category] || 0) + 1;
      }

      const categoryDetails: CategoryDetail[] = Object.entries(categoryCountMap).map(
        ([category, count]) => ({
          dirName: category,
          publicName: this.postParser.formatCategoryName(category),
          count,
        })
      );

      return categoryDetails;
    } catch (error) {
      console.error('카테고리 리스트 불러오기 실패', error);
      return [];
    }
  }
}
