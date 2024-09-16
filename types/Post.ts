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
