export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
  slug?: string;
}
export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  thumbnailAlt: string;
  preview: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
  tag?: string;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}
