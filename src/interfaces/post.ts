export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
}
