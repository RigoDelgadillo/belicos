import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"

export const BackButton = () => {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-lg p-3 shadow-md rounded-lg  mb-12 hover:cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out flex items-center gap-2 bg-white"
    >
      <ArrowLeft width={24} strokeWidth={1.5}/>
      <span>Regresar</span>
    </button>
  )
}
