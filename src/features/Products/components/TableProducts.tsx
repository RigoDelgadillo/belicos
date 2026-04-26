import { Pencil, Trash2 } from "lucide-react"
import { useState } from "react";
import type { Product } from "../types";
import { UpdateProductModal } from "./UpdateProductModal";

interface TableProductsProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void
}

export const TableProducts = ({products, isLoading, error, refetch} : TableProductsProps) => {

  const [productToEditId, setProductToEditId] = useState<number | null>(null);

  const handleUpdateConfirm = async () => {
    setProductToEditId(null);
    refetch();
  }

  if(isLoading) {
    return (
      <div className="w-full p-10 text-center text-gray-500 bg-white rounded-2xl shadow-xl">
        Cargando productos...
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full p-10 text-center text-red-500 bg-white rounded-2xl shadow-xl">
        Error al cargar: {error}
      </div>
    );
  }
  
  return (
    <>
      <div className="w-full overflow-hidden shadow-xl rounded-2xl border border-gray-100 bg-white">
        <table className="w-full text-left border-collapse">
          {/* ENCABEZADO */}
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">ID</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Imagen</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoria</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Estado</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
            </tr>
          </thead>

          {/* CUERPO - Aquí irá tu .map() */}
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr 
                key={product.categoryId}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-5 text-md text-gray-400 font-medium">
                  #{product.productId}
                </td>
                <td className="px-6 py-5 text-md font-bold text-gray-800">
                  {product.imageUrl}
                </td>
                <td className="px-6 py-5 text-md text-gray-500">
                  {product.name}
                </td>
                <td className="px-6 py-5 text-md text-gray-500">
                  {product.description}
                </td>
                <td className="px-6 py-5 text-md text-gray-500">
                  {product.categoryName}
                </td>
                <td className="px-6 py-5 text-md text-gray-500">
                  {product.price}
                </td>
                <td className="px-6 py-5 text-md text-gray-500">
                  {product.stock}
                </td>
                <td className="px-6 py-5 text-center">
                  { product.active === true ? 
                    <span
                      className="px-3 py-1 text-sm font-bold uppercase rounded-full bg-green-100 text-green-600"
                    >Activo</span>
                      :
                      <span
                      className="px-3 py-1 text-sm font-bold uppercase rounded-full bg-gray-500/20 text-gray-600"
                    >Inactivo</span>
                    }
                </td>
                
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-10 text-gray-400">
                    <Pencil 
                      className="w-6 h-6 hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 ease-in-out"
                      onClick={() => setProductToEditId(product.productId)}
                    />
                    {/* <Trash2 
                      className="w-6 h-6 hover:cursor-pointer hover:text-red-600 transition-colors duration-300 ease-in-out"
                      onClick={() => setProductToDelete(product)}
                    /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
{/* 
      <DeleteCategoryModal 
        isOpen={categoryToDelete !== null}
        category={categoryToDelete}
        onClose={() => setCategoryToDelete(null)}
        onConfirm={handleDeleteConfirm}
      />
      */}

      <UpdateProductModal
        isOpen={productToEditId !== null}
        productId={productToEditId}
        onClose={() => setProductToEditId(null)}
        onConfirm={handleUpdateConfirm}
      /> 
    </>
  )
}
