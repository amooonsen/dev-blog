import dayjs from 'dayjs';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Post } from '@/types/Post';

export class PostParser {
  public async parsePost(postPath: string, postsBasePath: string): Promise<Post> {
    const relativePath = path.relative(postsBasePath, postPath).replace('.mdx', '');
    const [categoryPath, slug] = relativePath.split(path.sep);
    const url = `/blog/${categoryPath}/${slug}`;
    const categoryPublicName = this.formatCategoryName(categoryPath);

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

  public formatCategoryName(dirPath: string): string {
    return dirPath
      .split('_')
      .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
      .join(' ');
  }
}
