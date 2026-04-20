import { useState } from "react"
import { cateogoriesApi } from "../api/api";


export const useDeleteCategory = () => {
  
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const[error, setError] = useState<string | null>(null);

  const deleteCategory = async (categoryId: number) => {
    setIsDeleting(true);
    setError(null);

    try {
      await cateogoriesApi.delete(categoryId);
      return(true);
    } catch (err: any) {
      setError(err.message || "No se pudo eliminar la categoría");
      return false;
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteCategory, isDeleting, error }

}