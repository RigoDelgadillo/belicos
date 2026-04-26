import { useCallback, useEffect, useState } from "react";
import type { Category } from "../types/Categories";
import { categoriesApi } from "../api/api";


export const useGetAllActivesCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [errorCategories, setErrorCategories] = useState<string | null>(null);


  const fetchCategories = useCallback(async () => {
  
      setIsLoadingCategories(true);
  
      try {
        
        const data = await categoriesApi.getAllActives();
  
        setCategories(data);
  
      }catch (err: any){
        setErrorCategories(err.message || "Error al cargar las categorias")
      } finally {
        setIsLoadingCategories(false);
      }
  
    }, []);
  
    useEffect(() => {
      fetchCategories();
    }, [fetchCategories]);

  return {
    categories,
    isLoadingCategories,
    errorCategories
  }
}