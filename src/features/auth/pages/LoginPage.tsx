import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Mail, RectangleEllipsis } from "lucide-react";

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error} = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({email, password});
  }


  return (
    <div className="flex flex-col max-w-[90%] m-auto mt-20 md:max-w-[80%] md:flex-row md:justify-around md:items-center ">
        <h1 
          className="text-6xl font-bold text-center md:text-7xl"
        >Bélicos <span className="text-[#d52d2c]">Boneless</span></h1>
      <div
        className="bg-white py-12 px-10 mt-10 shadow-lg rounded-xl"
      >
        <div>
          <h1 className="text-3xl font-semibold">Iniciar Sesión</h1>
          <p className="text-gray-500 text-md">
            Ingrese sus credenciales para aceder a la app
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
        >
          <div 
            className="flex flex-col gap-2 mt-5"
          >
            <label
              className="text-xl"
            >Email: </label>
            <div
              className="flex items-center gap-3 focus-within:ring-red-500/30 transition-all bg-gray-100 rounded-xl p-3"
            >
              <Mail width={24} strokeWidth={1.5} className="text-gray-400"/>
            
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="correo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full bg-transparent outline-none text-base text-gray-500"
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-2 mt-5"
          >
            <label
              className="text-xl"
            >Contraseña: </label>
            <div
              className="flex items-center gap-3 focus-within:ring-red-500/30 transition-all bg-gray-100 rounded-xl p-3"
            >
              <RectangleEllipsis width={24} strokeWidth={1.5} className="text-gray-400"/>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="w-full bg-transparent outline-none text-base text-gray-500"
              />
            </div>
          </div>
          {error && 
          <p
            className="text-red-500 text-sm"
          >{error}</p>
          }
          <button 
            type="submit"
            className="mt-10 p-4 bg-[#d52d2c] w-full rounded-xl text-white text-xl hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Ingresando...' : 'Iniciar Sesión'} 
          </button>
        </form>
      </div>
    </div>
  );
};
