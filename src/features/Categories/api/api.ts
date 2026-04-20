import http from "../../../api/apiClient"
import type { Category } from "../types/Categories"

export const cateogoriesApi = {
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
}