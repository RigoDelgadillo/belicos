import apiClient from "../../../api/apiClient";
import type { LoginRequest, LoginResponse } from "../types/auth.type";

export const authService = {

  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const { data } = await apiClient.post<LoginResponse>(
      `/auth/login`,
      credentials,
    );
    return data;
  },

  register: async (userData: any): Promise<void> => {
    await apiClient.post("/auth/register", userData);
  },
};
