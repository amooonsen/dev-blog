// import dayjs from 'dayjs';
// import fs from 'fs';
// import matter from 'gray-matter';
// import path from 'path';
// import readingTime from 'reading-time';

// // utils
// import { extractCategoryAndSlug, formatCategoryName } from '@/lib/path';

// // types
// import { Post } from '@/types/TypePost';

// export class PostParser {
//   public async parsePost(postPath: string, postsBasePath: string): Promise<Post> {
//     try {
//       const {
//         onedepth,
//         category: categoryPath,
//         slug,
//       } = extractCategoryAndSlug(postPath, postsBasePath);

//       const url = `/docs/${onedepth}/${categoryPath}/${slug}`;
//       const categoryPublicName = formatCategoryName(categoryPath);

//     const fileContent = fs.readFileSync(postPath, 'utf-8');
//       const { data: frontmatter, content } = matter(fileContent);
//       const readingMinutes = Math.ceil(readingTime(content).minutes);
//       const dateString = dayjs(frontmatter.date).locale('ko').format('YYYY년 MM월 DD일');

//       console.log('Parsed post:', {
//         url,
//         onedepth,
//         categoryPath,
//         slug,
//         postPath,
//         postsBasePath,
//       });

//       return {
//         title: frontmatter.title,
//         desc: frontmatter.desc,
//         thumbnail: frontmatter.thumbnail,
//         thumbnailAlt: frontmatter.thumbnailAlt,
//         url,
//         onedepth,
//         categoryPath,
//         categoryPublicName,
//         slug,
//         date: frontmatter.date,
//         dateString,
//         content,
//         readingMinutes,
//         ...frontmatter,
//       };
//     } catch (error) {
//       console.error('Error parsing post:', error);
//       throw error;
//     }
//   }
// }
