// repositories/PostRepository.ts

import { IPostRepository } from './IPostRepository';
import { BaseRepository } from './BaseRepository';

// utils
import { formatCategoryName } from '@/lib/path';

// types
import { Post, CategoryDetail } from '@/types/TypePost';

export class PostRepository extends BaseRepository implements IPostRepository {
  public async fetchPostList(category?: string, onedepth?: string): Promise<Post[]> {
    try {
      const postPaths = this.getPostFilePaths(category, onedepth);
      console.log('Fetching posts for:', { onedepth, category, postPaths });

      const postPromises = postPaths.map(async (postPath) => {
        try {
          return await this.postParser.parsePost(postPath, this.POSTS_PATH);
        } catch (error) {
          console.error('Error parsing post:', postPath, error);
          return null;
        }
      });

      const posts = (await Promise.all(postPromises)).filter((post): post is Post => post !== null);
      return posts;
    } catch (error) {
      console.error('Error in fetchPostList:', error);
      return [];
    }
  }

  private sortPostsByDate(posts: Post[], order: 'asc' | 'desc' = 'desc'): Post[] {
    return posts.sort((a, b) => {
      if (order === 'asc') {
        return a.date.getTime() - b.date.getTime();
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    });
  }

  public async fetchFilteredAndSortedPostList(
    category: string | undefined,
    selectedTags: string[],
    sortOption: string
  ): Promise<Post[]> {
    let posts = await this.fetchPostList(category);

    // 태그 필터링
    if (selectedTags.length > 0) {
      posts = posts.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)));
    }

    // 정렬
    switch (sortOption) {
      case 'ascending':
        posts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'descending':
        posts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'newest':
        posts = this.sortPostsByDate(posts, 'desc');
        break;
      case 'oldest':
        posts = this.sortPostsByDate(posts, 'asc');
        break;
      default:
        // 기본 정렬: 최신순
        posts = this.sortPostsByDate(posts, 'desc');
        break;
    }

    return posts;
  }

  public async fetchAllPostCount(): Promise<number> {
    return (await this.fetchPostList()).length;
  }

  public async fetchAllTags(): Promise<string[]> {
    const posts = await this.fetchPostList();
    const tagsSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag: string) => tagsSet.add(tag)));

    return Array.from(tagsSet);
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
          publicName: formatCategoryName(category),
          count,
        })
      );

      return categoryDetails;
    } catch (error) {
      console.error('카테고리 리스트 불러오기 실패', error);
      return [];
    }
  }

  public async fetchRecentPosts(limit: number = 6): Promise<Post[]> {
    try {
      // 모든 포스트를 가져옵니다
      const posts = await this.fetchPostList();
      
      // 날짜순으로 정렬합니다
      const sortedPosts = this.sortPostsByDate(posts, 'desc');
      
      // 최근 게시물 limit 개수만큼 반환합니다
      return sortedPosts.slice(0, limit);
    } catch (error) {
      console.error('최근 게시물 불러오기 실패:', error);
      return [];
    }
  }
}
