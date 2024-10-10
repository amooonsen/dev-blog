import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { Post } from '@/types/TypePost';

export class PostParser {
  public async parsePost(
    postPath: string,
    postsBasePath: string,
    oneDepthPath: string | null = null
  ): Promise<Post> {
    const absolutePostPath = path.resolve(postPath);
    const relativePath = path.relative(postsBasePath, absolutePostPath).replace('.mdx', '');

    const segments = relativePath.split(path.sep);
    const categoryPath = segments[segments.length - 3];
    const slug = segments[segments.length - 2];

    const url = `/${oneDepthPath}/${categoryPath}/${slug}`;
    const categoryPublicName = this.formatCategoryName(categoryPath);

    const fileContent = fs.readFileSync(postPath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    const readingMinutes = Math.ceil(readingTime(content).minutes);
    const dateString = dayjs(frontmatter.date).locale('ko').format('YYYY년 MM월 DD일');

    return {
      url,
      categoryPath,
      categoryPublicName,
      slug,
      date: frontmatter.date,
      dateString,
      content,
      readingMinutes,
      ...frontmatter,
    } as Post;
  }

  public formatCategoryName(dirPath: string): string {
    return dirPath
      .split('_')
      .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
      .join(' ');
  }
}
