import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

// types
import { Post, PostMatter, CategoryDetail } from '@/types/TypePost';

const BASE_PATH = '/post';

const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

/**
 * 특정 카테고리의 모든 게시물 경로를 가져옵니다.
 * @param {string} [category] - 선택적으로 특정 카테고리를 지정합니다. 없을 시 모든 카테고리 포함.
 * @returns {string[]} 게시물 경로 배열
 */
export const getPostPaths = (category?: string): string[] => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  console.log(postPaths);
  return postPaths;
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
    desc: postDetail.desc,
  };
};

/**
 * 게시물의 요약 정보를 파싱하여 반환합니다.
 * @param {string} postPath - 게시물 파일 경로
 * @returns {Object} 게시물 요약 정보 (oneDepth, category, slug, url, categoryPublicName 포함)
 */
export const parsePostAbstract = (
  postPath: string
): {
  oneDepth: string;
  category: string;
  slug: string;
  url: string;
  categoryPublicName: string;
} => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [oneDepth, category, slug] = filePath.split('/');
  const url = `/docs/${oneDepth}/${category}/${slug}`;
  const categoryPublicName = getCategoryPublicName(category);
  return { oneDepth, category, slug, url, categoryPublicName };
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
 * @param {string} [oneDepth] - 선택적으로 특정 oneDepth를 지정합니다. 없을 시 모든 게시물 포함.
 * @returns {Promise<Post[]>} 게시물 리스트
 */
export const getPostList = async (oneDepth?: string): Promise<Post[]> => {
  const postPaths = oneDepth ? getPostPaths(`${oneDepth}`) : getPostPaths();
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
 * @param {string} [oneDepth] - 선택적으로 특정 oneDepth를 지정합니다. 없을 시 모든 게시물 포함.
 * @returns {Promise<Post[]>} 정렬된 게시물 리스트
 */
export const getSortedPostList = async (oneDepth?: string): Promise<Post[]> => {
  const postList = await getPostList(oneDepth);
  return sortPostList(postList);
};

/**
 * 모든 카테고리의 리스트를 가져옵니다.
 * @returns {string[]} 카테고리 리스트
 */
export const getCategoryList = (): string[] => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const cgList = cgPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
  return cgList;
};

export const getCategoryDetailList = async () => {
  const postList = await getPostList();
  const result: { [key: string]: number } = {};
  for (const post of postList) {
    const category = post.categoryPath;
    if (result[category]) {
      result[category] += 1;
    } else {
      result[category] = 1;
    }
  }
  const detailList: CategoryDetail[] = Object.entries(result).map(([category, count]) => ({
    dirName: category,
    publicName: getCategoryPublicName(category),
    count,
  }));

  return detailList;
};

/**
 * 특정 게시물의 상세 정보를 가져옵니다.
 * @param {string} oneDepth - 게시물의 1차 디렉터리 정보
 * @param {string} category - 게시물의 카테고리
 * @param {string} slug - 게시물의 슬러그
 * @returns {Promise<Post>} 게시물 상세 정보
 */
export const getPostDetail = async (
  oneDepth: string,
  category: string,
  slug: string
): Promise<Post> => {
  const filePath = `${POSTS_PATH}/${oneDepth}/${category}/${slug}/content.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};
