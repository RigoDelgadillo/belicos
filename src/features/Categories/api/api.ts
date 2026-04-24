import http from "../../../api/apiClient"
import type { Category, CreateCategory, UpdateCategory } from "../types/Categories"

export const categoriesApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await http.get<Category[]>("/Categories");
    return response.data;
  },

  delete: async (categoryId: number): Promise<void> => {

    await http.delete(`/Categories/${categoryId}`);
  },

  getById: async (categoryId: number) : Promise<Category> => {
    const response = await http.get<Category>(`/Categories/${categoryId}`);
    return response.data;
  },

  updateCategory: async (categoryId: number, data: UpdateCategory) : Promise<UpdateCategory> => {
    const response = await http.put(`/Categories/${categoryId}`, data);
    return response.data
  },

  createCategory: async (data: CreateCategory) => {
    const response = await http.post("/Categories", data);
    return response.data;
  }
}