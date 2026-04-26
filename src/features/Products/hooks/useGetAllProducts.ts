import { useEffect, useState } from "react"
import type { Product } from "../types"
import { productsApi } from "../api";


export const useGetAllProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);

    setError(null);

    try {
      const data = await productsApi.getAll();

      setProducts(data);
    } catch (err: any){
      setError(err.message || "Ocurrio un error al obtener los productos");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
    refetch: fetchProducts
  }

}