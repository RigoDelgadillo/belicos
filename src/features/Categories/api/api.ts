import http from "../../../api/apiClient"
import type { Category, CreateCategory, UpdateCategory } from "../types/Categories"

export const categoriesApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await http.get<Category[]>("/categories");
    return response.data;
  },

  getAllActives: async (): Promise<Category[]> => {
    const response = await http.get<Category[]>("/categories/actives");
    return response.data;
  },

  delete: async (categoryId: number): Promise<void> => {

    await http.delete(`/categories/${categoryId}`);
  },

  getById: async (categoryId: number) : Promise<Category> => {
    const response = await http.get<Category>(`/categories/${categoryId}`);
    return response.data;
  },

  updateCategory: async (categoryId: number, data: UpdateCategory) : Promise<UpdateCategory> => {
    const response = await http.put(`/categories/${categoryId}`, data);
    return response.data
  },

  createCategory: async (data: CreateCategory) => {
    const response = await http.post("/categories", data);
    return response.data;
  }
}