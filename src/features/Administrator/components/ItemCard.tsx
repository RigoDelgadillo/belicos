import { ArrowRight, type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface ItemCardProps {
  title: string,
  description: string,
  icon: LucideIcon,
  to: string
}

export const ItemCard = ({title, description, icon: Icon, to} : ItemCardProps) => {
  return (
    <Link
      className="p-5 shadow-lg rounded-xl bg-white md:w-xl h-xl mb-10 md:mb-0"
        to={to}
    >
      <div 
        className="px-3 py-2 bg-gray-200 rounded-2xl flex justify-center w-fit"
      >
        <Icon size={48} strokeWidth={1.5}/>
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
        <div
          className="flex mt-5 gap-2 text-lg items-center text-red-600 hover:cursor-pointer p-2"
        >
          Entrar al Módulo

          <ArrowRight size={24} strokeWidth={1.5} />
        </div> 
      </div>
      
      
    </Link>
  )
}
