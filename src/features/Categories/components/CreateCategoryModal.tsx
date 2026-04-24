import { useCreateCategory } from "../hooks/useCreateCategory";

interface ActiveToggleStaticProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const CreateCategoryModal = ({
  isOpen,
  onClose,
  onConfirm
  }: ActiveToggleStaticProps) => {

    const {
      formData,
      isCreating,
      handleChange,
      handleSubmit,
      resetForm} = useCreateCategory();

    const onFormSubmit = async (e: React.FormEvent) => {
      const result = await handleSubmit(e);

      if(result) {
        resetForm();
        onConfirm();
        onClose();
      }
    }

  if(!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        className="w-full max-w-[90%] sm:max-w-md p-6 pt-8 bg-white rounded-2xl shadow-2xl"
      >
        <div>
          <div
            className="flex items-center gap-2"
          >
            <div 
              className="w-1.5 h-9 bg-green-500 rounded-full"
            />
            
            <h2
              className="text-4xl font-medium"
            >
              
              Crear
            </h2>
          </div>
          <p
            className="text-lg text-gray-700"
          >
            Crea una nueva categoría.
          </p>

          <form 
            className="mt-5 flex flex-col gap-5"
            onSubmit={onFormSubmit}
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
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
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
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="bg-gray-200 rounded-lg py-2 px-3 text-lg"
              />
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
                type="submit"
                className={isCreating ? `w-full px-4 py-2 text-xl font-medium text-white transition-colors bg-gray-400 rounded-xl`
                  : `w-full px-4 py-2 text-xl font-medium text-white transition-colors bg-green-500 rounded-xl hover:bg-green-600 hover:cursor-pointer`
                }
                disabled={isCreating}
              >{ isCreating ? "Creando..." : "Crear" }</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
