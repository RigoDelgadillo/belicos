import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: any | null;
  setAuth: (user: any, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("auth_token"),
  user: null,

  setAuth: (user, token) => {
    localStorage.setItem("auth_token", token);
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    set({ user: null, token: null });
  },
}));
