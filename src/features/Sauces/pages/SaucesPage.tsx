import { NavbarAdmin } from "../../../components/NavbarAdmin"

export const SaucesPage = () => {
  return (
    <>
          <NavbarAdmin />
          <div
            className="max-w-[80%] mx-auto mt-20"
          >
            <div>
              <h1
                className="text-5xl font-bold"
              >Salsas</h1>
              <div
                className="mt-3 flex items-center gap-3"
              >
                <span className="text-red-500 text-4xl font-bold">
                  |
                </span>
                <p
                  className="text-xl text-gray-600"
                >Puedes ver la lista de salsas disponibles. Puedes crear, borrar y editar las existentes.</p>
              </div>
            </div>
          </div>
        </>
  )
}
