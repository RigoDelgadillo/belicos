import { Check, X } from "lucide-react";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import { useEffect, useState } from "react";

interface ActiveToggleStaticProps {
  isOpen: boolean;
  categoryId: number | null;
  onClose: () => void;
}

export const UpdateCategoryModal = ({
  isOpen,
  categoryId, 
  onClose}: ActiveToggleStaticProps) => {

    const {category, isLoading, error} = useUpdateCategory(categoryId);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if(category){
      setName(category.name);
      setDescription(category.description ?? "");
      setIsActive(category.active ?? false);
    }
  }, [category]);

  if(!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        className="w-full max-w-[90%] sm:max-w-md p-6 pt-8 bg-white rounded-2xl shadow-2xl"
      >
        <div
          className=""
        >
          <div
            className="flex gap-2 items-center"
          >
            <span
                className="text-4xl font-black text-yellow-400"
              >
                |
              </span>
            <h2
              className="text-4xl font-medium"
            >
              
              Actualizar
            </h2>
          </div>
          <p
            className="text-lg text-gray-700"
          >
            Manipula los datos que deseas actualizar.
          </p>

          <form 
            className="mt-5 flex flex-col gap-5"
          >
            <div
              className="flex flex-col gap-3 mb-2"
            >
              <label 
                htmlFor="name"
                className="text-2xl w-fit"
              >Nombre:</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 rounded-lg py-2 px-3 text-lg"
              />
            </div>
            <div
              className="flex flex-col gap-3 mb-2"
            >
              <label 
                htmlFor="name"
                className="text-2xl w-fit"
              >Descripcion:</label>
              <textarea
                name="description" 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-200 rounded-lg py-2 px-3 text-lg"
              />
            </div>
            <div
              className="flex gap-5 items-center"
            >
              <label 
                htmlFor="name"
                className="text-2xl w-fit"
              >Activo</label>
              <div
                onClick={() => setIsActive(!isActive)}
                className={`
                  relative inline-flex items-center h-7 w-14 rounded-full hover:cursor-pointer 
                  ${isActive ? 'bg-green-500' : 'bg-gray-300'}
                `}
              >
                {/* El circulito blanco que se posiciona a la izquierda o derecha */}
                <span
                  className={`
                    inline-flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md
                    ${isActive ? 'translate-x-6' : 'translate-x-1'}
                  `}
                >
                  {/* Mostramos la palomita verde si está activo, o la X gris si no lo está */}
                  {isActive ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <X className="w-3 h-3 text-gray-400" />
                  )}
                </span>
              </div>
            </div>
          </form>
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
            onClick={() => console.log({ name, description, isActive })}
            className="w-full px-4 py-2 text-xl font-medium text-white transition-colors bg-yellow-400 rounded-xl hover:bg-yellow-500 hover:cursor-pointer"
          >Actualizar</button>
        </div>
        </div>
      </div>
    </div>
  )
}
