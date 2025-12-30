import { useState } from "react"

export const AddModal = ({ modal, dmodal }) => {
    const [nombre, setNombre] = useState("")
    const [codigo, setCodigo] = useState("")
    const [endpoint, setEndpoint] = useState("iconos")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handlerSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const elemento = {
            nombre: nombre,
            codigo: codigo,
            id_iconos:"11"
        }
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(elemento)
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
            }
            
           
            setNombre("");
            setCodigo("");
            dmodal();
            

            
        } catch (err) {
            console.error("Error al crear:", err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`ml-0 mt-5 ${modal}`}>
            <div className="absolute inset-0 bg-opacity-50" onClick={dmodal}></div>
            
            <div className="bg-[#151515] rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 relative z-10 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-6 text-center">Crear Nuevo Componente</h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-900 border border-red-700 text-red-200 rounded-lg">
                        Error: {error}
                    </div>
                )}
                
                <form className="space-y-4" onSubmit={handlerSubmit}>
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                            Nombre del Componente
                        </label>
                        <input 
                            type="text" 
                            id="nombre" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            placeholder="Ingresa el nombre"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="tipo" className="block text-sm font-medium text-gray-300 mb-1">
                            Tipo de Componente
                        </label>
                        <select 
                            id="tipo" 
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="" disabled>Selecciona un tipo</option>
                            <option value="botones">Botones</option>
                            <option value="cards">Cards</option>
                            <option value="navs">Navs</option>
                            <option value="inputs">Inputs</option>
                            <option value="variado">Variado</option>
                            <option value="iconos">Iconos</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="codigoComponente" className="block text-sm font-medium text-gray-300 mb-1">
                            Código del Componente
                        </label>
                        <textarea 
                            id="codigoComponente" 
                            rows="5" 
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            placeholder="Pega o escribe el código aquí..."
                            required
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                        <button 
                            type="submit" 
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center min-w-20"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Guardando...
                                </span>
                            ) : "Guardar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
