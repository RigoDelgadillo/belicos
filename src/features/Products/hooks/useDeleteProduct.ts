import { useState } from "react"
import { productsApi } from "../api";

export const useDeleteProduct = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const deleteProduct = async (productId: number) => {
    setIsDeleting(true);
    setError(null);

    try {
      await productsApi.delete(productId);
      return(true);
    } catch (err) {
      setError("No sepudo eliminar el producto");
    } finally {
      setIsDeleting(false);
    }
  }

  return {
    deleteProduct,
    isDeleting,
    error
  }
}