import { useState } from "react";
import { NavbarAdmin } from "../../../components/NavbarAdmin"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { TableCategories } from "../components/TableCategories"
import { CreateCategoryModal } from "../components/CreateCategoryModal";
import { useGetAllCategories } from "../hooks/useGetAllCategories";

export const CategoriesPage = () => {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const {
    categories, isLoading, error, refetch
  } = useGetAllCategories();

  return (
    <>
      <NavbarAdmin />
      <div
        className="max-w-[80%] mx-auto mt-20"
      >
        <div
          className="lg:flex justify-between lg:items-end mb-20"
        >
          <div
            className="mb-10 lg:m-0"
          >
            <h1
              className="text-5xl font-bold"
            >Categorías</h1>
            <div
              className="mt-3 flex items-center gap-3"
            >
              <span className="text-red-600 text-4xl font-bold">
                |
              </span>
              <p
                className="text-xl text-gray-600"
              >Puedes ver la lista de categorias disponibles. Puedes crear, borrar y editar las existentes.</p>
          </div>
          </div>

          <PrimaryButton 
            label="Agregar nueva categoría"
            onClick={() => setIsCreateModalOpen(true)}
          />
        </div>
          <TableCategories 
            categories={categories}
            isLoading={isLoading}
            refetch={refetch}
            error={error}
          />
      </div>

      
      <CreateCategoryModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onConfirm={refetch}
      />
    </>
  )
}
