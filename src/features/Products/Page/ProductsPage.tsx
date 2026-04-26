import { useState } from "react";
import { BackButton } from "../../../components/BackButton"
import { NavbarAdmin } from "../../../components/NavbarAdmin"
import { PrimaryButton } from "../../../components/PrimaryButton";
import { TableProducts } from "../components/TableProducts";
import { useGetAllProducts } from "../hooks/useGetAllProducts"
import { CreateProductModal } from "../components/CreateProductModal";

export const ProductsPage = () => {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const {products, isLoading, error, refetch} = useGetAllProducts();

    // // Logica para el modal
    // const {formData, isCreating, handleChange, handleSubmit} = useCreateProduct();
  
    // const onFormSubmit = async (e: React.FormEvent) => {
    //   const result = await handleSubmit(e);
  
    //   if(result){
    //     if(onConfirm) onConfirm()
    //   }
    // }

  return (
    <>
          <NavbarAdmin />
          <div
            className="max-w-[80%] mx-auto mt-20"
          >
            <BackButton />
            <div
              className="lg:flex justify-between lg:items-end mb-20"
            >
              <div
                className="mb-10 lg:m-0"
              >
                <h1
                  className="text-5xl font-bold"
                >Productos</h1>
                <div
                  className="mt-3 flex items-center gap-3"
                >
                  <span className="text-red-500 text-4xl font-bold">
                    |
                  </span>
                  <p
                    className="text-xl text-gray-600"
                  >Puedes ver la lista de los productos disponibles. Puedes crear, borrar y editar los existentes.</p>
                </div>
              </div>
              <PrimaryButton
                label="Agregar nuevo producto"
                onClick={() => setIsCreateModalOpen(true)}
              />
            </div>

            <TableProducts
              products={products}
              isLoading={isLoading}
              refetch={refetch}
              error={error}
            />
          </div>

          <CreateProductModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onConfirm={refetch}>
            <form action=""><label htmlFor="">ola</label></form>
          </CreateProductModal>
        </>
  )
}
