import { AlertTriangle } from "lucide-react";
import type { Product } from "../types";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

interface DeleteProductModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void
  onConfirm: () => void
}


export const DeleteProductModal = ({
  isOpen,
  product,
  onClose,
  onConfirm
}: DeleteProductModalProps) => {

  const {
    deleteProduct,
    isDeleting,
    error
  } = useDeleteProduct();


  if(!isOpen || !product) return null

  const handleDelete = async () => {
  if (!product) return;
  const success = await deleteProduct(product.productId);
  if (success) onConfirm();
};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        className="w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl"
      >
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="p-3 mb-4 bg-red-100 rounded-full"
          >
            <AlertTriangle
              className="w-12 h-12 text-red-600"
            />
          </div>
          <h2
            className="text-4xl font-bold text-gray-800"
          >
            ¿Eliminar Producto?
          </h2>
          <p
            className="mt-2 text-lg text-gray-500"
          >Estás a punto de eliminar el producto</p>
        </div>

        {error && (
          <div className="w-full p-3 mb-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200">
            {error}
          </div>
        )}
        <div
          className="flex gap-4 mt-8"
        >
          <button 
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 text-xl font-medium text-gray-700 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200 hover:cursor-pointer"
          >Cancelar</button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full px-4 py-2 text-xl font-medium text-white transition-colors bg-red-600 rounded-xl hover:bg-red-700 hover:cursor-pointer"
          >{isDeleting ? "Eliminando..." : "Si, Eliminar"}</button>
        </div>
      </div>
    </div>
  )
}
