import { useEffect, useState } from "react";
import { ComponentCard } from "./ComponentCard";
import { useMiContexto } from './ContextFather';
import { Skeleton } from "./skeleton";
export const CompReceptor = () => {
    const { endpoint, fetchingDatos,} = useMiContexto();
    const [lista, setLista] = useState([]); 
    const [loading, setLoading] = useState(false); 
    
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
                setTimeout(() => {
                    setLoading(false)
                }, 800);
                
            }
        };
        obtenerLista();
    }, [endpoint, fetchingDatos]);

    if (loading) {
        return <Skeleton/>;
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