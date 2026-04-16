import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5150/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Sesión expirada o no autorizada. Limpiando...");

      useAuthStore.getState().logout();
    }

    return Promise.reject(error);
  },
);

export default http;
