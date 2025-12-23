import { useEffect, useState } from "react";
import { ComponentCard } from "./ComponentCard";
import { useMiContexto } from './ContextFather';

export const CompReceptor = () => {
    const { endpoint, fetchingDatos } = useMiContexto();
    const [lista, setLista] = useState([]); // Inicializar como array vacío
    const [loading, setLoading] = useState(true); // Estado de carga
    
    useEffect(() => {
        const obtenerLista = async () => {
            try {
                setLoading(true);
                const listanueva = await fetchingDatos(endpoint);
                setLista(listanueva);
            } catch (error) {
                console.error("Error al obtener datos:", error);
                setLista([]);
            } finally {
                setLoading(false);
            }
        };
        obtenerLista();
    }, [endpoint, fetchingDatos]);

    console.log(lista);
    

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:ml-48 p-3">
            {lista && lista.length > 0 ? (
                lista.map((component) => (

                    <ComponentCard key={component.id_iconos} component={component} codigo={component.codigo} />
                ))
            ) : (
                <div>No hay datos disponibles</div>
            )}
        </div>
    );
};