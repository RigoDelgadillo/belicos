export const TableCategories = () => {
  return (
    <div className="w-full overflow-hidden shadow-xl rounded-2xl border border-gray-100 bg-white">
      <table className="w-full text-left border-collapse">
        {/* ENCABEZADO */}
        <thead className="bg-gray-50/50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">ID</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoría</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Descripción</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Estado</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
          </tr>
        </thead>

        {/* CUERPO - Aquí irá tu .map() */}
        <tbody className="divide-y divide-gray-100">
          {/* Fila de Ejemplo 1 */}
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-5 text-sm text-gray-400 font-medium">
              #001
            </td>
            <td className="px-6 py-5">
              <div className="flex items-center gap-4">
                {/* Miniatura o Icono similar a la foto de la imagen */}
                <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-500">category</span>
                </div>
                <div>
                  <div className="text-base font-bold text-gray-800">Premium Wings</div>
                  <div className="text-xs text-gray-400">CAT-PREM</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-5 text-sm text-gray-500 max-w-xs truncate">
              Categoría destinada a productos de alta calidad y salsas especiales.
            </td>
            <td className="px-6 py-5 text-center">
              <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-green-100 text-green-600">
                Activo
              </span>
            </td>
            <td className="px-6 py-5 text-right">
              <div className="flex justify-end gap-3 text-gray-400">
                <button className="hover:text-blue-600 transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="hover:text-red-600 transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </td>
          </tr>

          {/* Fila de Ejemplo 2 (Inactivo) */}
          <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-5 text-sm text-gray-400 font-medium">#002</td>
            <td className="px-6 py-5 text-base font-bold text-gray-800">Entradas</td>
            <td className="px-6 py-5 text-sm text-gray-500">Complementos para tu orden principal.</td>
            <td className="px-6 py-5 text-center">
              <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-gray-100 text-gray-400">
                Inactivo
              </span>
            </td>
            <td className="px-6 py-5 text-right">
              <div className="flex justify-end gap-3 text-gray-400">
                <span className="material-symbols-outlined cursor-pointer hover:text-blue-600">edit</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-red-600">delete</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
