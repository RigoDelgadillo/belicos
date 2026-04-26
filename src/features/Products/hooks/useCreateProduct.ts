import React, { useState } from "react"
import type { CreateProduct } from "../types";
import { productsApi } from "../api";

const initialFormState = {
  categoryId: null,
  name: '',
  description: '',
  imageUrl: '',
  price: 0,
  stock: 0,
  active: true,
}

export const useCreateProduct = () => {
  
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);


  const [formData, setFormData] = useState<CreateProduct>(initialFormState);

  function handleChange<K extends keyof CreateProduct>(name: K, value: CreateProduct[K]) {
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
      await productsApi.createProduct(formData);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      return true;
    } catch(err) {
      
      const errorMessage = err instanceof Error
      ? err.message
      : "Error al crear el producto"
      setError(errorMessage);

      setTimeout(() => {
        setError(null);
      }, 2000);
      throw err;
    } finally {
      setIsCreating(false);
    }

    
  }

  const resetForm = () => {
    setFormData(initialFormState);
  }

  return{
    formData,
    isCreating,
    error,
    isSuccess,
    handleChange,
    handleSubmit,
    resetForm
  }
}