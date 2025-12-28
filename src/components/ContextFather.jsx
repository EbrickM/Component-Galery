import { createContext, useState, useContext, useEffect, useCallback } from 'react';

const MiContexto = createContext();

export const useMiContexto = () => {
  const context = useContext(MiContexto);
  if (!context) {
    throw new Error('useMiContexto debe usarse dentro de un ContextFather');
  }
  return context;
};

export const ContextFather = ({ children }) => {
  const activado = "bg-[#151515] w-[180px] h-screen flex flex-col gap-7 p-1 pr-0 fixed  z-200 md:z-310 banner items-center";
  const desactivado = "bg-[#151515] w-[180px] h-screen flex flex-col gap-7 p-1 pr-0 fixed z-200  md:z-310 nobanner items-center";
  const element = "element";
  const noelement = "noelement";

  const getInitialState = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 540 ? activado : desactivado;
    }
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
  const [listaGeneral, setListaGeneral] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [endpoint, setEndpoint] = useState("iconos");

  // Función de fetching estabilizada con useCallback
  const fetchingDatos = useCallback(async (endpointParam = endpoint) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://127.0.0.1:8000/api/${endpointParam}/`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setListaGeneral(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      setIsLoading(false);
      throw error;
    }
  }, [endpoint]); // Dependencia: endpoint

  // Opcional: Función para actualizar la lista sin re-fetch
  const actualizarLista = useCallback((nuevaLista) => {
    setListaGeneral(nuevaLista);
  }, []);

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
    return () => window.removeEventListener('resize', handleResize);
  }, [activado, desactivado, element, noelement]);

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

  const contextValue = {
    button, 
    clases,
    activado,
    desactivado,
    setClases, 
    handlerActivar, 
    handlerGoBackClick,
    endpoint,
    setEndpoint,
    fetchingDatos,
    refestado,
    listaGeneral,
    actualizarLista,
    isLoading
  };

  return (
    <MiContexto.Provider value={contextValue}>
      {children}
    </MiContexto.Provider>
  );
};