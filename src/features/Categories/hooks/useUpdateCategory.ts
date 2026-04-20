import { useEffect, useState } from "react"
import type { Category } from "../types/Categories"
import { cateogoriesApi } from "../api/api";

export const useUpdateCategory = (categoryId: number | null) => {

  // Estados para el GetCurrentCategory
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    if(!categoryId) {
      setCategory(null);
      return;
    }

    const fetchCategory = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await cateogoriesApi.getById(categoryId);

      setCategory(data);
    } catch (err: any){
      setError(err.message || "Ocurrió un error al obtener la categoría")
    } finally{
      setIsLoading(false)
    }
  }
  
  fetchCategory();

  }, [categoryId])

  
  

  return {
    category,
    isLoading,
    error,
  }

}