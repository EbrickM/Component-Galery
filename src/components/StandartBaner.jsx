import lupeIcon from '../assets/icons/lupeIcon.svg';
import '../assets/font/fonts.css'
import { useEffect, useState } from 'react';
import { useMiContexto } from './ContextFather';
import { searching } from './logic/searching';
import { SearchBanner } from './SearchBanner';

export const StandartBaner = () => {
  const [estadoClose, setEstadoClose] = useState("hidden");
  const [estadoOpen, setEstadoOpen] = useState(""); 
  const [state, setState] = useState("hidden");
  const [listaFiltrada, setListaFiltrada] = useState([]); 
  // CORRECCIÓN 1: Invocar el hook correctamente
  const {handlerActivar, handlerGoBackClick ,refestado,listaGeneral} = useMiContexto();

  const handlerEstadoOpen = () => {
    setEstadoClose("");
    setEstadoOpen("hidden");
    handlerGoBackClick();
    
  }

  const handlerEstadoClose = () => {
    setEstadoClose("hidden");
    setEstadoOpen("");
    handlerActivar();
  }
 
  useEffect(()=>{
  if(refestado){
  setEstadoClose("hidden");
  setEstadoOpen("");
  }else {
  setEstadoClose("");
  setEstadoOpen("hidden");
}
  },[refestado]);

  return (
    <>
    <section className='flex justify-between items-center sm:justify-center w-full h-14 fixed z-300 bg-black'>
      <div className='sm:hidden'>
        <div className={`${estadoOpen} transition-all duration-200`} onClick={handlerEstadoOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path d="M19 8L5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 12L5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 16L5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className={`${estadoClose} transition-all duration-200 `} onClick={handlerEstadoClose}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </div>
      </div>
      
      <div className='flex items-center mr-4 sm:mr-0'>
        <input 
          type="text" 
          placeholder='Busca un componente' 
          className='buscador-movile sm:buscador p-2 pr-4 text-[#ebe5e5] placeholder:text-[#ebe5e54a] rounded-4xl border-[#ebe5e5] border-2 fixed text-left ml-16' 
          style={{fontFamily:'helvetica-c'}}
          onChange={(e)=>{setListaFiltrada(searching(e.target.value,listaGeneral)); if(e.target.value==""||listaFiltrada.length===0){setState("hidden")}else{setState("")}}}
        /> 
        <img className='object-cover h-6 w-auto invert-100 ml-54 mr-1' src={lupeIcon} alt="icon" />
      </div>
    </section>
    <SearchBanner list={listaFiltrada} state={state}/>
    </>
  )
}
