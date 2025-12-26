import { NavItem } from './NavItem'
import { SelecterButton } from './SelecterButton';
import  agregarIcon  from '../assets/icons/addIcon.svg';
import { useMiContexto } from './ContextFather';

export const SideBar = ({fmodal}) => {
    const { button, clases,  handlerActivar, handlerGoBackClick,setEndpoint } = useMiContexto();

    return (
        <>
        <section className={`${clases}`}>
            <NavItem elemento="Botón" onClick={()=>{handlerActivar();setEndpoint("botones")}}/>
            <NavItem elemento="Card" onClick={()=>{handlerActivar();setEndpoint("cards")}} />
            <NavItem elemento="Nav" onClick={()=>{handlerActivar();setEndpoint("botones")}} />
            <NavItem elemento="Input" onClick={()=>{handlerActivar();setEndpoint("inputs")}} />
            <NavItem elemento="Variado" onClick={()=>{handlerActivar();setEndpoint("variados")}} />
            <NavItem elemento="Iconos" onClick={()=>{handlerActivar();setEndpoint("iconos")}} />
            <img onClick={fmodal} className='object-cover w-[25%] h-auto invert-75 hover:invert-100 cursor-pointer'src={agregarIcon} alt="" />
        </section>
         <SelecterButton onClick={()=>{handlerGoBackClick()}} clases={button}/> 
         </>
    )
}