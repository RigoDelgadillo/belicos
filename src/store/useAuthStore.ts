import { create } from "zustand";
import type { User } from "../features/auth/types/auth.type";
import http from "../api/apiClient";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingSession: boolean;

  setAuth: (user: User) => void;
  logout: () => void;
  checkSession: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isCheckingSession: true,

  setAuth: (user => set({ user, isAuthenticated: true })),

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  checkSession: async () => {
    try{
      const response = await http.get("/me")

      set({
        user: response.data,
        isAuthenticated: true,
        isCheckingSession: false
      });
    }catch (error){
      useAuthStore.getState().logout();

      set({ isCheckingSession: false })
    }
  }
}));
