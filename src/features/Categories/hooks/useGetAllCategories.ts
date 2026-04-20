import { useEffect, useState } from "react"
import type { Category } from "../types/Categories";
import { cateogoriesApi } from "../api/api";


export const useGetAllCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);


  const fetchCategories = async () => {
    
    setIsLoading(true);
    
    setError(null);

    try {
      const data = await cateogoriesApi.getAll();

      setCategories(data);

    } catch(err: any) {
      setError(err.message || "Ocurrió un error al obtener las categorias")
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {

    fetchCategories();

  }, []);

  return {
    categories,
    isLoading,
    error,
    refetch: fetchCategories
  }
}