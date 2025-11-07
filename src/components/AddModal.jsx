
export const AddModal = ({modal,dmodal}) => {
  return (
<div className={modal}>
    <div className="absolute inset-0"></div>
    
    <div className="bg-[#151515] rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 relative z-10 border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-6 text-center">Crear Nuevo Componente</h2>
        
        <form className="space-y-4">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">Nombre del Componente</label>
                <input 
                    type="text" 
                    id="nombre" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Ingresa el nombre"
                />
            </div>
            
            <div>
                <label htmlFor="codigo" className="block text-sm font-medium text-gray-300 mb-1">Código del Componente</label>
                <input 
                    type="text" 
                    id="codigo" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Ingresa el código"
                />
            </div>
            
            <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-300 mb-1">Tipo de Componente</label>
                <select 
                    id="tipo" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="" disabled selected>Selecciona un tipo</option>
                    <option value="botones" className="bg-gray-800">Botones</option>
                    <option value="cards" className="bg-gray-800">Cards</option>
                    <option value="navs" className="bg-gray-800">Navs</option>
                    <option value="inputs" className="bg-gray-800">Inputs</option>
                    <option value="variado" className="bg-gray-800">Variado</option>
                    <option value="iconos" className="bg-gray-800">Iconos</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="codigoComponente" className="block text-sm font-medium text-gray-300 mb-1">Código del Componente</label>
                <textarea 
                    id="codigoComponente" 
                    rows="5" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Pega o escribe el código aquí..."
                ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
                <button onClick={dmodal} type="button" className="px-4 py-2 text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    Cancelar
                </button>
                <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                    Guardar
                </button>
            </div>
        </form>
    </div>
</div>
  )
}
