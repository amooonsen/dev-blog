export interface Post {
  url: string;
  categoryPath: string;
  categoryPublicName: string;
  slug: string;
  date: string;
  dateString: string;
  content: string;
  [key: string]: any;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}
