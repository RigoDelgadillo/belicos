import { useState } from "react"
import type { CreateCategory } from "../types/Categories";
import { categoriesApi } from "../api/api";

const initialFormState = {
  name: '',
  description: ''
}

export const useCreateCategory = () => {

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<CreateCategory>(initialFormState);


  function handleChange(name: keyof CreateCategory, value: string) {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsCreating(true);
    setError(null);
    setIsSuccess(false);

    try {
      await categoriesApi.createCategory(formData);

      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      return true


    } catch(err : any) {

      setError(err.message || "Error al crear la categoría");
      
      setTimeout(() => {
        setError(null);
      }, 2000);
      
      throw err;

    } finally {
      setIsCreating(false)
    }

  }

  const resetForm = () => {
    setFormData(initialFormState);
  }

  return {
    formData,
    isCreating,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    resetForm
  }

}