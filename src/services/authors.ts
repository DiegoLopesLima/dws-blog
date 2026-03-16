import { api } from "@/lib/axios";
import type { Author } from "@/types/Author";

export const getAuthors = async () => {
  const response = await api.get<Author[]>("/authors");

  return response.data;
};
