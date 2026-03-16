import { api } from "@/lib/axios";
import type { Category } from "@/types/Category";

export const getCategories = async () => {
  const response = await api.get<Category[]>("/categories");

  return response.data;
};
