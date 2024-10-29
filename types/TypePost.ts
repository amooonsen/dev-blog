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
export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}

export interface ProjectMatter {
  title: string;
  desc: string;
  startMonth: string;
  endMonth: string;
  tags: string;
  gitRepoUrl?: string;
  link?: string;
}

export interface Project extends ProjectMatter {
  slug: string;
  startMonthString: string;
  endMonthString?: string;
  content: string;
}
