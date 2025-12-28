import { createContext, useState, useContext, useEffect } from 'react';

const MiContexto = createContext();

// Hook personalizado para acceder al contexto
export const useMiContexto = () => {
  const context = useContext(MiContexto);
  if (!context) {
    throw new Error('useMiContexto debe usarse dentro de un ContextFather');
  }
  return context;
};

export const ContextFather = ({ children }) => {
  const activado = "bg-[#151515] w-[180px] h-screen flex flex-col gap-7 p-1 pr-0 fixed z-200 banner items-center";
  const desactivado = "bg-[#151515] w-[180px] h-screen flex flex-col gap-7 p-1 pr-0 fixed z-200 nobanner items-center";
  const element = "element";
  const noelement = "noelement";

  // Estado inicial basado en el tamaño de pantalla
  const getInitialState = () => {
    // Verificar si estamos en el cliente (window está disponible)
    if (typeof window !== 'undefined') {
      return window.innerWidth < 540 ? activado : desactivado;
    }
    // Valor por defecto si no estamos en el cliente
    return desactivado;
  };

  const getInitialButtonState = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 540 ? element : noelement;
    }
    return noelement;
  };

  const [button, setButton] = useState(getInitialButtonState);
  const [clases, setClases] = useState(getInitialState);
    const [refestado, setRefEstado] = useState(true); 
  // Efecto para actualizar cuando cambie el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setClases(activado);
        setButton(element);
      } else {
        setClases(desactivado);
        setButton(noelement);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Limpiar el event listener al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlerActivar = () => {
    setClases(activado);
    setButton(element);
    setRefEstado(true);
  };
  
  const handlerGoBackClick = () => {
    setClases(desactivado);
    setButton(noelement);
    setRefEstado(false);
  };

  const [endpoint ,setEndpoint]=useState("iconos");
 
   async function fetchingDatos(endpoint) {
   try {
     const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`);
     
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     
     const data = await response.json();
     return data;
   } catch (error) {
     console.error('Error al obtener iconos:', error);
   }
 }
  return (
    <MiContexto.Provider value={{ 
      button, 
      clases,
      activado,
      desactivado,
      setClases, 
      handlerActivar, 
      handlerGoBackClick,
      endpoint ,
      setEndpoint,
      fetchingDatos,
      refestado
    }}>
      {children}
    </MiContexto.Provider>
  );
};