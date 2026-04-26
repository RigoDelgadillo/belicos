import { useEffect, useRef } from "react";
import { useUpdateProduct } from "../hooks/useUpdateProject";
import { SwitchActive } from "../../Administrator/components/SwitchActive";

interface UpdateProductModalProps {
  isOpen: boolean;
  productId: number | null;
  onClose: () => void;
  onConfirm: (productId: number) => void;
}


export const UpdateProductModal = ({
  isOpen,
  productId,
  onClose,
  onConfirm
}: UpdateProductModalProps) => {

  const dialogRef = useRef<HTMLDialogElement>(null);

  const { formData, isUpdating, handleChange, handleSubmit } = useUpdateProduct(productId);

  const onFormSubmit = async(e: React.FormEvent) => {
    const result = await handleSubmit(e);

    if(result){
      if(onConfirm && productId) onConfirm(productId);
    }
  }

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if(isOpen) {
      dialogElement?.showModal();
    } else {
      dialogElement?.close();
    }

  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="w-full m-auto max-w sm:max-w-md p-6 bg-white rounded-2xl shadow-2xl backdrop:bg-black/50 backdrop-blur-sm"
    >
      <div>
        <div
          className="flex gap-2 items-center"
        >
          <div 
            className="w-1.5 h-9 bg-yellow-400 rounded-full"
          />
          <h2
            className="text-4xl font-medium"
          >Actualizar</h2>
        </div>
          <p 
            className="text-lg text-gray-700"
          >Manipula los datos que deseas actualizar.</p>
          <form 
            onSubmit={onFormSubmit}
            className="mt-5 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3 mb-2">
                <label 
                  htmlFor="name" 
                  className="text-2xl w-fit"
                >Nombre: </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData?.name || ''}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="bg-gray-200 rounded-lg py-2 px-3 text-lg"
                />
              </div>
              <div 
                className="flex flex-col gap-3 mb-2"
              >
                <label 
                  htmlFor="description" 
                  className="text-2xl w-fit"
                >Descripción:</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData?.description || ''} 
                  onChange={(e) => handleChange('description', e.target.value)} 
                  className="bg-gray-200 rounded-lg py-2 px-3 text-lg" />
              </div>
              <div 
                className="flex flex-col gap-3 mb-2"
              >
                <label 
                  htmlFor="price" 
                  className="text-2xl w-fit"
                >Precio:</label>
                <input 
                  type="number" 
                  step="0.01" 
                  id="price" 
                  name="price"  
                  value={formData?.price || 0} onChange={(e) => 
                  handleChange('price', Number(e.target.value))} 
                  className="bg-gray-200 rounded-lg py-2 px-3 text-lg" />
              </div>
              <div 
                className="flex flex-col gap-3 mb-2"
              >
                <label 
                  htmlFor="stock" 
                  className="text-2xl w-fit"
                >Stock:</label>
                <input 
                  type="number" 
                  id="stock" 
                  name="stock" 
                  value={formData?.stock || 0} 
                  onChange={(e) => handleChange('stock', Number(e.target.value))} 
                  className="bg-gray-200 rounded-lg py-2 px-3 text-lg" 
                />
              </div>
            <SwitchActive 
              checked={formData.active}
              onChange={() => handleChange}
            />

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="w-full px-4 py-2 text-xl font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors hover:cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isUpdating}
                className={` w-full px-4 py-2 text-xl font-medium text-white rounded-xl transition-colors ${isUpdating ? 'bg-gray-400' : 'bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer'}`}
              >
                {isUpdating ? "Actualizando..." : "Actualizar"}
              </button>
            </div>
          </form>
        </div>
    </dialog>
  )
}
