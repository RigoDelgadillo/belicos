import { AlertTriangle } from "lucide-react"
import type { Category } from "../types/Categories";

interface DeleteCategoryModalProps {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
  onConfirm: (categoryId: number) => void;
}

export const DeleteCategoryModal = ({
  isOpen,
  category,
  onClose,
  onConfirm
} : DeleteCategoryModalProps) => {

  if(!isOpen || !category) return null

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
            Eliminar Categoría?
          </h2>
          <p
            className="mt-2 text-lg text-gray-500"
          >Estás a punto de eliminar la categoría</p>
        </div>
        <div
          className="flex gap-4 mt-8"
        >
          <button 
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 text-xl font-medium text-gray-700 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200 hover:cursor-pointer"
          >Cancelar</button>
          <button
            onClick={() => onConfirm(category.categoryId)}
            className="w-full px-4 py-2 text-xl font-medium text-white transition-colors bg-red-600 rounded-xl hover:bg-red-700 hover:cursor-pointer"
          >Si, Eliminar</button>
        </div>
      </div>
    </div>
  )
}
