interface ItemCardProps {
  title: string,
  description: string,
  icon: string,
  // handleClick: () => void
}

export const ItemCard = ({title, description, icon} : ItemCardProps) => {
  return (
    <article
      className="p-5 shadow-xl rounded-xl border border-gray-100 hover:cursor-pointer md:w-xl h-xl mb-10 md:mb-0"
    >
      <div 
        className="px-3 py-2 bg-gray-200 rounded-2xl flex justify-center w-fit"
      >
        <span className="material-symbols-outlined text-5xl!">
          {icon}
        </span>
      </div>

      <div
        className="mt-5"
      >
        <h3
          className="text-2xl font-semibold"
        >{title}</h3>

        <p
          className="text-gray-600 text-lg"
        >{description}</p>
      </div>

      <div 
        className="flex justify-end"
      >
        <button 
          type="button"
          className="flex mt-5 gap-2 text-lg items-center text-red-600 hover:cursor-pointer p-2"
        >
          Entrar al Módulo

          <span className="material-symbols-outlined">
            arrow_forward
          </span>
        </button> 
      </div>
      
      
    </article>
  )
}
