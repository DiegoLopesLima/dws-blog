import type { Author } from "./author";
import type { Category } from "./category";

export type Post = {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
  author: Author;
};
