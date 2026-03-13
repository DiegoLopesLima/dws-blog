import { api } from "@/lib/axios";
import type { Post } from "@/types/post";

export const getPosts = async () => {
  const response = await api.get<Post[]>("/posts");

  return response.data;
};
