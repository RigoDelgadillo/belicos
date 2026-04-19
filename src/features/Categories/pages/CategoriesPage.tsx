import { NavbarAdmin } from "../../../components/NavbarAdmin"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { TableCategories } from "../components/TableCategories"

export const CategoriesPage = () => {
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
          />
        </div>
          <TableCategories />
      </div>
    </>
  )
}
