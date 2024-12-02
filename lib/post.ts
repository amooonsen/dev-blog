import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

// types
import { Post, PostMatter, CategoryDetail } from '@/types/TypePost';

// 상수 정의
const POST_CONFIG = {
  BASE_PATH: '/post',
  VALID_ONEDEPTHS: ['tech', 'newsletter', 'life'] as const,
} as const;

// 타입 정의
type OneDepth = (typeof POST_CONFIG.VALID_ONEDEPTHS)[number];

interface PostPath {
  onedepth: OneDepth;
  category: string;
  slug: string;
}

// 유틸리티 함수
const isValidOneDepth = (value: string): value is OneDepth => {
  return POST_CONFIG.VALID_ONEDEPTHS.includes(value as OneDepth);
};

/**
 * 특정 카테고리의 모든 게시물 경로를 가져옵니다.
 * @param {string} [onedepth] - 선택적으로 특정 oneDepth를 지정합니다. 없을 시 모든 게시물 포함.
 * @param {string} [category] - 선택적으로 특정 카테고리를 지정합니다. 없을 시 모든 카테고리 포함.
 * @returns {string[]} 게시물 경로 배열
 */
export const getPostPaths = (onedepth?: string, category?: string): string[] => {
  try {
    const POSTS_PATH = path.join(process.cwd(), POST_CONFIG.BASE_PATH);

    if (onedepth && !isValidOneDepth(onedepth)) {
      throw new Error(`Invalid onedepth: ${onedepth}`);
    }

    const pattern = [POSTS_PATH, onedepth || '**', category || '**', '**/*.mdx'].join('/');

    return sync(pattern);
  } catch (error) {
    console.error('Failed to get post paths:', error);
    return [];
  }
};

/**
 * 게시물의 요약 정보와 상세 정보를 파싱하여 반환합니다.
 * @param {string} postPath - 게시물 파일 경로
 * @returns {Promise<Post>} 게시물 객체 (요약 정보와 상세 정보 포함)
 */
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = await parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
    categoryPath: postAbstract.category,
    title: postDetail.title,
    date: postDetail.date,
    thumbnail: postDetail.thumbnail,
    preview: postDetail.preview,
  };
};

/**
 * 게시물의 요약 정보를 파싱하여 반환합니다.
 * @param {string} postPath - 게시물 파일 경로
 * @returns {Object} 게시물 요약 정보 (onedepth, category, slug, url, categoryPublicName 포함)
 */
export const parsePostAbstract = (
  postPath: string
): {
  onedepth: string;
  category: string;
  slug: string;
  url: string;
  categoryPublicName: string;
} => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(POST_CONFIG.BASE_PATH))
    .replace(`${POST_CONFIG.BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [onedepth, category, slug] = filePath.split('/');
  const url = `/post/${onedepth}/${category}/${slug}`;
  const categoryPublicName = getCategoryPublicName(category);
  return { onedepth, category, slug, url, categoryPublicName };
};

/**
 * 게시물의 상세 정보를 파싱하여 반환합니다.
 * @param {string} postPath - 게시물 파일 경로
 * @returns {Object} 게시물 상세 정보 (grayMatter 데이터, 콘텐츠, 읽기 시간, 날짜 문자열 포함)
 */
export const parsePostDetail = (
  postPath: string
): {
  [key: string]: any;
  content: string;
  readingMinutes: number;
  dateString: string;
} => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
  return { ...grayMatter, content, readingMinutes, dateString };
};

/**
 * 카테고리의 공용 이름을 생성하여 반환합니다.
 * @param {string} dirPath - 디렉터리 경로
 * @returns {string} 카테고리의 공용 이름 (첫 글자 대문자)
 */
export const getCategoryPublicName = (dirPath: string): string => {
  return dirPath
    .split('_')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1, token.length))
    .join(' ');
};

/**
 * 모든 게시물의 리스트를 가져옵니다.
 * @param {string} [onedepth] - 선택적으로 특정 oneDepth를 지정합니다. 없을 시 모든 게시물 포함.
 * @param {string} [category] - 선택적으로 특정 카테고리를 지정합니다. 없을 시 모든 카테고리 포함.
 * @returns {Promise<Post[]>} 게시물 리스트
 */
export const getPostList = async (onedepth?: string, category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(onedepth, category);
  const postList = await Promise.all(postPaths.map((postPath) => parsePost(postPath)));
  return postList;
};

export const getAllPostCount = async () => (await getPostList()).length;

/**
 * 게시물을 최신 날짜순으로 정렬합니다.
 * @param {Post[]} PostList - 정렬할 게시물 리스트
 * @returns {Post[]} 정렬된 게시물 리스트
 */
const sortPostList = (PostList: Post[]): Post[] => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

/**
 * 최신순으로 정렬된 게시물 리스트를 가져옵니다.
 * @param {string} [onedepth] - 선택적으로 특정 oneDepth를 지정합니다. 없을 시 모든 게시물 포함.
 * @param {string} [category] - 선택적으로 특정 카테고리를 지정합니다. 없을 시 모든 카테고리 포함.
 * @param {number} [page=1] - 페이지 번호
 * @param {number} [limit=10] - 페이지당 게시물 수
 * @returns {Promise<{posts: Post[], hasMore: boolean, total: number}>} 정렬된 게시물 리스트와 추가 데이터
 */
export const getSortedPostList = async (
  onedepth?: string,
  category?: string,
  page: number = 1,
  limit: number = 10
): Promise<{ posts: Post[]; hasMore: boolean; total: number }> => {
  const postList = await getPostList(onedepth, category);
  const sortedPosts = sortPostList(postList);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    hasMore: endIndex < sortedPosts.length,
    total: sortedPosts.length,
  };
};

/**
 * 추가 게시물을 가져옵니다.
 * @param {string} [onedepth] - 선택적으로 특정 oneDepth를 지정합니다.
 * @param {string} [category] - 선택적으로 특정 카테고리를 지정합니다.
 * @param {number} offset - 건너뛸 게시물 수
 * @param {number} [limit=10] - 가져올 게시물 수
 * @returns {Promise<{posts: Post[], hasMore: boolean}>} 추가 게시물 리스트와 더보기 가능 여부
 */
export const getMorePosts = async (
  onedepth?: string,
  category?: string,
  offset: number,
  limit: number = 10
): Promise<{ posts: Post[]; hasMore: boolean }> => {
  const postList = await getPostList(onedepth, category);
  const sortedPosts = sortPostList(postList);

  const nextPosts = sortedPosts.slice(offset, offset + limit);

  return {
    posts: nextPosts,
    hasMore: offset + limit < sortedPosts.length,
  };
};

/**
 * 모든 카테고리의 리스트를 가져옵니다.
 * @returns {string[]} 카테고리 리스트
 */
export const getCategoryList = (): string[] => {
  const cgPaths: string[] = sync(`${POST_CONFIG.BASE_PATH}/*`);
  const cgList = cgPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
  return cgList;
};

export const getCategoryDetailList = async (onedepth?: string) => {
  try {
    const postList = await getPostList(onedepth);

    const categoryCount = postList.reduce((acc, post) => {
      const category = post.categoryPath;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryCount).map(([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    }));
  } catch (error) {
    console.error('Failed to get category details:', error);
    return [];
  }
};

/**
 * 특정 게시물의 상세 정보를 가져옵니다.
 * @param {string} onedepth - 게시물의 1차 디렉터리 정보
 * @param {string} category - 게시물의 카테고리
 * @param {string} slug - 게시물의 슬러그
 * @returns {Promise<Post>} 게시물 상세 정보
 */
export const getPostDetail = async (
  onedepth: string,
  category: string,
  slug: string
): Promise<Post | null> => {
  try {
    if (!isValidOneDepth(onedepth)) {
      throw new Error(`Invalid onedepth: ${onedepth}`);
    }

    const filePath = path.join(
      process.cwd(),
      POST_CONFIG.BASE_PATH,
      onedepth,
      category,
      slug,
      'content.mdx'
    );

    if (!fs.existsSync(filePath)) {
      throw new Error(`Post not found: ${filePath}`);
    }

    const detail = await parsePost(filePath);
    return detail;
  } catch (error) {
    console.error('Failed to get post detail:', error);
    return null;
  }
};
