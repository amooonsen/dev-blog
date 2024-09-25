import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { Post } from '@/types/TypePost';

export class PostParser {
  public async parsePost(postPath: string, postsBasePath: string): Promise<Post> {
    const relativePath = path.relative(postsBasePath, postPath).replace('.mdx', '');
    const [categoryPath, slug] = relativePath.split(path.sep);
    const url = `/blog/${categoryPath}/${slug}`;
    const categoryPublicName = this.formatCategoryName(categoryPath);

    // const absolutePath = path.join(process.cwd(), postPath);

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
