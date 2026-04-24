import { Pencil, Trash2 } from "lucide-react"
import type { Category } from "../types/Categories";
import { useState } from "react";
import { DeleteCategoryModal } from "./DeleteCategoryModal";
import { useDeleteCategory } from "../hooks/useDeleteCategory";
import { UpdateCategoryModal } from "./UpdateCategoryModal";

interface TableCategoriesProps {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void
}

export const TableCategories = ({categories, isLoading, error, refetch} : TableCategoriesProps) => {

  const { deleteCategory} = useDeleteCategory();
  
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);
  const [categoryToEditId, setCategoryToEditId] = useState<number | null>(null);

  const handleDeleteConfirm = async (categoryId: number) => {
    
    const success = await deleteCategory(categoryId);

    if(success){
      setCategoryToDelete(null);
      refetch();
    } else {
      alert("Hubo un problema al eliminar");
    }
  }

  const handleUpdateConfirm = async () => {
    setCategoryToDelete(null);
    refetch();
  }

  if (isLoading) {
    return (
      <div className="w-full p-10 text-center text-gray-500 bg-white rounded-2xl shadow-xl">
        Cargando categorías...
      </div>
    );
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
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoría</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Estado</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
            </tr>
          </thead>

          {/* CUERPO - Aquí irá tu .map() */}
          <tbody className="divide-y divide-gray-100">
            {categories.map((category) => (
              <tr 
                key={category.categoryId}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-5 text-md text-gray-400 font-medium">
                  #{category.categoryId}
                </td>
                <td className="px-6 py-5 text-md font-bold text-gray-800">
                  {category.name}
                </td>
                <td className="px-6 py-5 text-md text-gray-500">
                  {category.description}
                </td>
                <td className="px-6 py-5 text-center">
                  { category.active === true ? 
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
                      onClick={() => setCategoryToEditId(category.categoryId)}
                    />
                    <Trash2 
                      className="w-6 h-6 hover:cursor-pointer hover:text-red-600 transition-colors duration-300 ease-in-out"
                      onClick={() => setCategoryToDelete(category)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteCategoryModal 
        isOpen={categoryToDelete !== null}
        category={categoryToDelete}
        onClose={() => setCategoryToDelete(null)}
        onConfirm={handleDeleteConfirm}
      />

      <UpdateCategoryModal
        isOpen={categoryToEditId !== null}
        categoryId={categoryToEditId}
        onClose={() => setCategoryToEditId(null)}
        onConfirm={handleUpdateConfirm}
      />
    </>
  )
}
