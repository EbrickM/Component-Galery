import { useState } from 'react'
import { NavItem } from './NavItem'
import { SelecterButton } from './SelecterButton';
import  agregarIcon  from '../assets/icons/addIcon.svg';
import logo from '../assets/icons/logo.png';

export const SideBar = ({fmodal}) => {
    const activado = "bg-[#151515] w-[180px] h-screen flex flex-col gap-7 p-1 pr-0 fixed z-20 banner items-center";
    const desactivado = "bg-[#151515] w-[180px] h-screen flex flex-col gap-7 p-1 pr-0 fixed z-20 nobanner items-center";
    const element=" absolute rounded-[100%] text-white border-white border-4 flex justify-center py-1 px-0.5 element cursor-pointer w-[20%] h-auto m-auto bg-white";
    const noelement=" absolute rounded-[100%] text-white border-white border-4 flex justify-center py-1 px-0.5 noelement cursor-pointer w-[20%] h-auto m-auto bg-white";

    const [button, setButton] = useState(noelement);
    const [clases, setClases] = useState(desactivado);

    const handlerActivar = () => {
        setClases(activado);
        setButton(element);
    }

 const handlerGoBackClick=()=>{
     setClases(desactivado);
     setButton(noelement);
 }
    return (
        <>
        <section className={clases}>
            <img src={logo} alt="Logo" />
            <NavItem elemento="Botones" onClick={handlerActivar} />
            <NavItem elemento="Cards" onClick={handlerActivar} />
            <NavItem elemento="Navs" onClick={handlerActivar} />
            <NavItem elemento="Inputs" onClick={handlerActivar} />
            <NavItem elemento="Variado" onClick={handlerActivar} />
            <NavItem elemento="Iconos" onClick={handlerActivar} />
            <img onClick={fmodal} className='object-cover w-[25%] h-auto invert-75 hover:invert-100 cursor-pointer'src={agregarIcon} alt="" />
        </section>
         <SelecterButton onClick={handlerGoBackClick} clases={button}/>
         </>
    )
}