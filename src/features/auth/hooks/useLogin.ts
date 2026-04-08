import { useState } from "react";
import { useAuthStore } from "../../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../types/auth.type";
import { authService } from "../api/auth.api";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const login = async (credentials: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await authService.login(credentials);

      setAuth(null, data.accessToken)

      navigate('/AdminPanel');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Credenciales Invalidas'
      
      setError(errorMessage)

      throw err;
    } finally {
      setIsLoading(false);
    }

  }
  
  return {login, isLoading, error}
}