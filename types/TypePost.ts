export interface Post {
  title: string;
  desc: string;
  url: string;
  categoryPath: string;
  thumbnail: string;
  thumbnailAlt: string;
  categoryPublicName: string;
  slug: string;
  date: Date;
  dateString: string;
  content: string;
  readingMinutes: number;
  [key: string]: any;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
  slug?: string;
}
