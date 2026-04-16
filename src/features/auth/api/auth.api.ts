import apiClient from "../../../api/apiClient";
import type { LoginRequest, User } from "../types/auth.type";

export const authService = {

  login: async (credentials: LoginRequest) => {
    const response = await apiClient.post<User>('/auth/login', credentials);
    return response.data;
  },

  register: async (userData: any): Promise<void> => {
    await apiClient.post("/auth/register", userData);
  },
};
