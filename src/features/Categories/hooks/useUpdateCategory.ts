import { useEffect, useState } from "react"
import type { Category, UpdateCategory } from "../types/Categories"
import { categoriesApi } from "../api/api";

const initialFormState = {
  name: '',
  description: '',
  active: true
}

export const useUpdateCategory = (categoryId: number | null) => {

  // Estados para el GetCurrentCategory
  const [category, setCategory] = useState<Category | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true); // Cargando la categoria
  const [error, setError] = useState<string | null>(null); // Mensaje de error al actualizar
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // Actualizado correctamente

  const [isUpdating, setIsUpdating] = useState<boolean>(false); // Actualizando...

  const [formData, setFormData] = useState<UpdateCategory>(initialFormState);

  useEffect(() => {

    if(!categoryId) {
      setCategory(null);
      setFormData(initialFormState)
      return;
    }

    const fetchCategory = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await categoriesApi.getById(categoryId);

      setCategory(data);

      setFormData({
        name: data.name,
        description: data.description,
        active: data.active
      })
    } catch (err: any){
      setError(err.message || "Ocurrió un error al obtener la categoría")
    } finally{
      setIsLoading(false)
    }
  }
  
  fetchCategory();

  }, [categoryId])

  const handleChange = (name: keyof UpdateCategory, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!categoryId) return;

    setIsUpdating(true);
    setError(null);
    setIsSuccess(false);

    try {
      await categoriesApi.updateCategory(categoryId, formData);

      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      return true


    } catch(err : any) {

      setError(err.message || "Error al actualizar la categoría");
      
      setTimeout(() => {
        setError(null);
      }, 2000);
      
      throw err;

    } finally {
      setIsUpdating(false)
    }

  }
  

  return {
    category,
    formData,
    isLoading,
    isUpdating,
    isSuccess,
    error,
    handleChange,
    handleSubmit
  }

}