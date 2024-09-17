// repositories/PostRepository.ts

import dayjs from 'dayjs';
import { promises as fs } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { Post, CategoryDetail } from '@/types/Post';

export class PostRepository {
  private readonly BASE_PATH = '/posts';
  private readonly POSTS_PATH = path.join(process.cwd(), this.BASE_PATH);

  // MDX 파일 경로 가져오기
  public getPostFilePaths(category?: string): string[] {
    const folder = category || '**';
    return sync(`${this.POSTS_PATH}/${folder}/**/*.mdx`);
  }

  // 카테고리 이름 포매팅
  private formatCategoryName(dirPath: string): string {
    return dirPath
      .split('_')
      .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
      .join(' ');
  }

  // 게시물 파싱
  private async parsePost(postPath: string): Promise<Post> {
    // 파일 경로에서 정보 추출
    const relativePath = path.relative(this.POSTS_PATH, postPath).replace('.mdx', '');
    const [categoryPath, slug] = relativePath.split(path.sep);
    const url = `/blog/${categoryPath}/${slug}`;
    const categoryPublicName = this.formatCategoryName(categoryPath);

    // 파일 내용 비동기적으로 읽기
    const fileContent = await fs.readFile(postPath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    const dateString = dayjs(frontmatter.date).locale('ko').format('YYYY년 MM월 DD일');

    return {
      url,
      categoryPath,
      categoryPublicName,
      slug,
      date: frontmatter.date,
      dateString,
      content,
      ...frontmatter,
    } as Post;
  }

  // 게시물 리스트 가져오기
  public async fetchPostList(category?: string): Promise<Post[]> {
    const postPaths = this.getPostFilePaths(category);
    const postPromises = postPaths.map((postPath) => this.parsePost(postPath));
    const posts = await Promise.all(postPromises);
    console.log(posts.length);
    return posts;
  }

  // 게시물 리스트 정렬
  private sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  }

  // 정렬된 게시물 리스트 가져오기
  public async fetchSortedPostList(category?: string): Promise<Post[]> {
    const posts = await this.fetchPostList(category);
    return this.sortPostsByDate(posts);
  }

  public async fetchAllPostCount() {
    return (await this.fetchPostList()).length;
  }

  // 카테고리 리스트 가져오기
  public async fetchCategoryList(): Promise<CategoryDetail[]> {
    try {
      const postList = await this.fetchPostList();
      const categoryCountMap: { [key: string]: number } = {};

      for (const post of postList) {
        const category = post.categoryPath;
        if (categoryCountMap[category]) {
          categoryCountMap[category] += 1;
        } else {
          categoryCountMap[category] = 1;
        }
      }

      const categoryDetails: CategoryDetail[] = Object.entries(categoryCountMap).map(
        ([category, count]) => ({
          dirName: category,
          publicName: this.formatCategoryName(category),
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
